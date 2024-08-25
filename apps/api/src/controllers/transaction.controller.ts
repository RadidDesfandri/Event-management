import prisma from "@/prisma";
import axios from "axios";
import { Request, Response } from "express";

const midtransClient = require('midtrans-client');
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.SECRET_KEY_MID
});

export class TransactionController {
    async createTransaction(req: Request, res: Response) {
        try {
            const { finalPrice, qty } = req.body
            const transaction = await prisma.transaction.create({
                data: {
                    finalPrice,
                    qty,
                    paymentLink: "",
                    event_Id: req.params.id,
                    user_Id: req.user?.id!
                }
            })

            const data = {
                transaction_details: {
                    order_id: transaction.id,
                    gross_amount: transaction.finalPrice
                },
                expiry: {
                    unit: "minutes",
                    duration: 5
                }
            }

            // U0ItTWlkLXNlcnZlci12amRZLVdGekZCTW5NY3k2aUVTUm9MZmw6
            const midtrans = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", data,
                {
                    headers: {
                        Authorization: "Basic U0ItTWlkLXNlcnZlci12amRZLVdGekZCTW5NY3k2aUVTUm9MZmw6"
                    }
                }
            )

            const midtransData =  midtrans.data
            await prisma.transaction.update({
                data:{
                    paymentLink: midtrans.data.redirect_url
                },
                where:{
                    id: transaction.id
                }
            })
            return res.status(200).send({
                status: "ok",
                msg: "Transaction created",
                transaction,
                data: midtransData
            })
        } catch (error) {
            return res.status(400).send({
                status: 'error',
                msg: error
            })
        }
    }
}