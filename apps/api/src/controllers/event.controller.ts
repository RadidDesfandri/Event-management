import prisma from "@/prisma";
import { query, Request, Response } from "express";

const base_url = process.env.BASE_URL || "http://localhost/8000/api"

export class EventController {
    async getEvent(req: Request, res: Response) {
        try {
            interface FilterQuery {
                OR?: [{ eventName: { contains: string } }, { location: { contains: string } }, { eo: { username: { contains: string } } }];
            }
            const { query, page } = req.query
            const limit = 12
            const pages: number = page ? +page : 1
            const filterQ: FilterQuery = {}

            if (query) {
                filterQ.OR = [
                    { eventName: { contains: query as string } },
                    { location: { contains: query as string } },
                    { eo: { username: { contains: query as string } } }
                ]
            }
            
            const event = await prisma.events.findMany({
                orderBy: [{ createdAt: "desc" }],
                where: filterQ,
                take: limit,
                skip: limit * (pages - 1),
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
                        }
                    },
                    Ticketing: {
                        select: {
                            nameTicket: true,
                            quota: true,
                            price: true,
                            startDate: true,
                        }
                    }
                },
            })
            return res.status(200).send({
                status: "ok",
                total: event.length,
                event,
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
            const startDate = new Date(req.body.startDate)
            const endDate = new Date(req.body.endDate)
            const quota = parseFloat(req.body.quota)
            const price = parseFloat(req.body.price)

            const event = await prisma.events.create({
                data: {
                    eventName: req.body.eventName,
                    location: req.body.location,
                    category: req.body.category,
                    description: req.body.description,
                    date: req.body.date,
                    image: media,
                    Ticketing: {
                        create: {
                            nameTicket: req.body.nameTicket,
                            quota: quota,
                            price: price,
                            startDate: startDate,
                            endDate: endDate
                        }
                    },
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