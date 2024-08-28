import prisma from '@/prisma';
import axios from 'axios';
import { Request, Response } from 'express';

const midtransClient = require('midtrans-client');
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_KEY_MID,
});

export class TransactionController {
  async createTransaction(req: Request, res: Response) {
    try {
      const { qty } = req.body;
      const eventsId = req.params.id;
      const userId = req.user?.id;

      // if (!qty || !eventsId || !!userId) {
      //   return res.status(400).send({
      //     status: 'error',
      //     msg: 'Permintaan fields tidak ada',
      //   });
      // }

      const ticket = await prisma.ticketing.findFirst({
        where: { eventsId: eventsId },
      });

      if (!ticket) {
        return res.status(404).send({
          status: 'error',
          msg: 'Ticket ga ketemu',
        });
      }

      if (ticket.quota < qty) {
        return res.status(404).send({
          status: 'error',
          msg: 'Ticket tidak cukup',
        });
      }

      const totalPrice = ticket.price * qty;
      const transaction = await prisma.transaction.create({
        data: {
          finalPrice: totalPrice,
          qty,
          paymentLink: '',
          event_Id: eventsId,
          user_Id: userId!,
        },
      });

      if (!qty || qty <= 0) {
        return res.status(400).send({
          status: 'error',
          msg: 'Invalid quantity',
        });
      }

      if (totalPrice < 0) {
        return res.status(400).send({
          status: 'error',
          msg: 'Invalid price',
        });
      }

      if (totalPrice > 0) {
        const data = {
          transaction_details: {
            order_id: transaction.id,
            gross_amount: transaction.finalPrice,
          },
          expiry: {
            unit: 'minutes',
            duration: 1,
          },
        };

        // U0ItTWlkLXNlcnZlci12amRZLVdGekZCTW5NY3k2aUVTUm9MZmw6
        const midtrans = await axios.post(
          'https://app.sandbox.midtrans.com/snap/v1/transactions',
          data,
          {
            headers: {
              Authorization:
                'Basic U0ItTWlkLXNlcnZlci12amRZLVdGekZCTW5NY3k2aUVTUm9MZmw6',
            },
          },
        );

        const midtransData = midtrans.data;

        await prisma.transaction.update({
          data: {
            paymentLink: midtransData.redirect_url,
          },
          where: {
            id: transaction.id,
          },
        });

        await prisma.ticketing.update({
          where: { id: ticket.id },
          data: {
            quota: ticket.quota - qty,
          },
        });

        return res.status(200).send({
          status: 'ok',
          msg: 'Transaction created, please pay',
          transaction,
          data: midtransData,
        });
      } else {
        await prisma.transaction.update({
          data: { status: 'Paid' },
          where: {
            id: transaction.id,
          },
        });

        return res.status(200).send({
          status: 'ok',
          msg: 'Transaction berhasil tanpa membayar',
          transaction,
        });
      }
    } catch (error) {
      return res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }

  async updateStatusTransaction(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body
      if (transaction_status == "settlement") {
        await prisma.transaction.update({
          data: { status: "Paid" },
          where: { id: order_id }
        })
      }

      if (transaction_status == "cancel") {
        await prisma.transaction.update({
          data: { status: "Declined" },
          where: { id: order_id }
        })
      }

      if (transaction_status == "expire") {
        await prisma.transaction.update({
          data: { status: "Declined" },
          where: { id: order_id }
        })
      }

      console.log(req.body);

      return res.status(200).send({
        status: 'ok',
        msg: 'Transaction done',
      });
    } catch (error) {
      return res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }

  async getTransaction(req: Request, res: Response) {
    try {
      const transaction = await prisma.transaction.findMany();

      return res.status(200).send({
        status: 'ok',
        transaction,
      });
    } catch (error) {
      return res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }

  async getTransactionByLog(req: Request, res: Response) {
    try {
      const userId = req.user?.id;

      const transaction = await prisma.transaction.findMany({
        where: {
          user_Id: userId,
        },
        include: {
          event: true,
        },
        orderBy: [{ created_at: "desc" }]
      });

      // const purchasedEvent = transaction.map((order) => order.event);

      return res.status(200).send({
        status: 'ok',
        transaction,
        // event: purchasedEvent
      });

    } catch (error) {
      return res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }
}
