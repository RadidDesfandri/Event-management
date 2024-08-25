import prisma from "@/prisma";
import { Request, Response } from "express";

export class ReviewController {
    async createReview(req: Request, res: Response) {
        try {
            const { review, ratings, eventId } = req.body

            const checkParticipation = await prisma.review.findFirst({
                where: {
                    user_Id: req.user?.id,
                    event_Id: eventId
                }
            })

            if (checkParticipation) {
                return res.status(400).send({
                    msg: "User sudah memberikan review untuk event ini."
                })
            }

            const newReview = await prisma.review.create({
                data: {
                    user_Id: req.user?.id!,
                    event_Id: req.params.id,
                    review: review,
                    ratings: ratings
                }
            })

            return res.status(200).send(newReview)

        } catch (error) {
            return res.status(400).send({
                status: 'error',
                msg: error
            })
        }
    }

    async getReview(req: Request, res: Response) {
        try {
            const review = await prisma.review.findMany({
                select: {
                    event: {
                        select:{
                            eventName: true
                        }
                    },
                    ratings: true,
                    review: true,
                    user: {
                        select:{
                            username: true,
                            email: true,
                            avatar: true
                        }
                    }
                }
            })

            return res.status(200).send({
                review
            })
        } catch (error) {
            return res.status(400).send({
                status: 'error',
                msg: error
            })
        }
    }
}