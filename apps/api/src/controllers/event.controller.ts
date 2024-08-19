import prisma from "@/prisma";
import { Request, Response } from "express";

const base_url = process.env.BASE_URL || "http://localhost/8000/api"

export class EventController {
    async getEvent(req: Request, res: Response) {
        try {
            const event = await prisma.events.findMany({
                select: {
                    id: true,
                    eventName: true,
                    category: true,
                    location: true,
                    description: true,
                    image: true,
                    date: true,
                    createdAt: true,
                    eo: {
                        select: {
                            username: true,
                            email: true,
                            avatar: true
                        },
                    },
                    Ticketing: {
                        select: {
                            nameTicket: true,
                            quota: true,
                            price: true,
                            startDate: true,
                            endDate: true
                        },
                    },
                },
                orderBy: [{ createdAt: "desc" }]
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

    async getEventById(req: Request, res: Response) {
        try {
            const event = await prisma.events.findUnique({
                select: {
                    id: true,
                    eventName: true,
                    category: true,
                    location: true,
                    description: true,
                    image: true,
                    date: true,
                    createdAt: true,
                    eo: {
                        select: {
                            username: true,
                            email: true,
                            avatar: true
                        },
                    },
                    Ticketing: {
                        select: {
                            nameTicket: true,
                            quota: true,
                            price: true,
                            startDate: true,
                            endDate: true
                        },
                    },
                },
                where: { id: req.params.id },

            })

            res.status(200).send({
                status: 'ok',
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
            const media = `${base_url}/public/event/${req.file?.filename}`
            // console.log(media);

            await prisma.events.create({
                data: {
                    eventName: req.body.eventName,
                    location: req.body.location,
                    category: req.body.category,
                    description: req.body.description,
                    date: req.body.date,
                    image: media,
                    eOId: +req.params.id
                }
            })

            await prisma.ticketing.create({
                data: {
                    nameTicket: req.body.nameTicket,
                    quota: req.body.quota,
                    price: req.body.id,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    eventsId: req.params.id
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