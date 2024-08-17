import prisma from "@/prisma";
import { Request, Response } from "express";

export class AuthController {
    async createUserData(req: Request, res: Response) {
        try {
            const newUser = await prisma.user.findFirst({
                where: { email: req.body.email }
            })
            if (newUser?.email == req.body.email) throw "Email already exist"

            const createUser = await prisma.user.create({
                data: {
                    ...req.body
                }
            })
            res.status(200).send({
                status: "success created user",
                data: createUser
            })
        } catch (error) {
            res.status(400).send({
                status: "Error create user data",
                msg: error
            })
        }
    }

    
}