import prisma from "@/prisma";
import { Request, Response } from "express";

export class UserController {
    async getUser(req: Request, res: Response) {
        try {
            const data =  await prisma.user.findMany()
            res.status(200).send({
                status: 'ok',
                data
            })
        } catch (err) {
            res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }    
    
}