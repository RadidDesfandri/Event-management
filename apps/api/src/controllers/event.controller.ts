import prisma from "@/prisma";
import { Request, Response } from "express";

export class EventController {
    async getEvent(req: Request, res: Response) {
        try {
            const event = await prisma.events.findMany()
            res.status(200).send({
                status: "ok",
                event
            })
        } catch (err) {
            res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }

    async createEvent(req: Request, res: Response) {
        try {
            // await prisma.events.create({
            //     data: {
            //         description: req.body.description,
            //         eo_Id: req.user?.id
            //     }
            // })
        } catch (err) {
            res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }
}