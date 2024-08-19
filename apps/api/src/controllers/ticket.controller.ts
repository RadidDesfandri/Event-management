import prisma from "@/prisma";
import { Request, Response } from "express";

export class TicketController {
    async getTicket(req: Request, res: Response) {
        try {
            const ticket = await prisma.ticketing.findMany()

            res.status(200).send({
                status: "ok",
                ticket
            })
        } catch (err) {
            res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }

    async createTicket(req: Request, res: Response) {
        try {
            await prisma.ticketing.create({
                data: {
                    nameTicket: req.body.nameTicket,
                    quota: req.body.quota,
                    price: req.body.price,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    eventsId: req.params.id
                }
            })

            return res.status(200).send({
                status: "ok",
                msg: "Ticket created"
            })
        } catch (err) {
            return res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }
}