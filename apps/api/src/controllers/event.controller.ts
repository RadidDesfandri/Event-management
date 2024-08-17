import prisma from "@/prisma";
import { Request, Response } from "express";

export class EventController {
    async getEvent(req: Request, res: Response) {
        try {
            const event = await prisma.events.findMany({
                include: {
                    eo: true,
                    Ticketing: true
                }
            })
            return res.status(200).send({
                status: "ok",
                event
            })
        } catch (err) {
            return res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }

    async createEvent(req: Request, res: Response) {
        try {
            await prisma.events.create({
                data: {
                    eventName: req.body.eventName,
                    location: req.body.location,
                    category: req.body.category,
                    description: req.body.description,
                    date: req.body.date,
                    eOId: +req.params.id

                }
            })
            return res.status(200).send({
                status: "ok",
                msg: 'Event created'
            })
        } catch (err) {
            return res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }

}