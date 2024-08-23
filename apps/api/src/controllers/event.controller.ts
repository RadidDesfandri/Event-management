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

            const count = await prisma.events.count();

            return res.status(200).send({
                status: "ok",
                totalPerPage: event.length,
                allPage: Math.ceil(count / limit),
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
            console.log(req.body)
            console.log(JSON.parse(req.body.ticket))
            const ticket = JSON.parse(req.body.ticket)

            const event = await prisma.events.create({
                data: {
                    eventName: req.body.eventName,
                    location: req.body.location,
                    category: req.body.category,
                    description: req.body.description,
                    date: req.body.date,
                    image: media,
                    eOId: req.user?.id!
                }
            })

            ticket.map( async (item: { ticketName: string; quota: string; price: string; date: string; }) => {
                await prisma.ticketing.create({
                    data:{
                        nameTicket: item.ticketName,
                        quota: +item.quota,
                        price: +item.price,
                        startDate: item.date,
                        endDate: event.date,
                        eventsId: event.id
                    }
                })
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