import { createToken } from "@/helpers/createToken";
import { hashPass } from "@/helpers/hashPassword";
import prisma from "@/prisma";
import { compare } from "bcrypt";
import { Request, Response } from "express";

export class UserEOController {
    async createUserEoData(req: Request, res: Response) {
        try {
            const newUserEO = await prisma.eO.findFirst({
                where: {
                    OR: [{ email: req.body.email }, { username: req.body.username }],
                }
            })
            if (newUserEO?.email == req.body.email) throw "Email already exist"

            if (newUserEO?.username == req.body.username) throw "Username already exist"

            const password = await hashPass(req.body.password);

            const createUserEO = await prisma.eO.create({
                data: {
                    ...req.body, password,
                }
            })
            res.status(200).send({
                status: "success created EO",
                data: createUserEO
            })
        } catch (error) {
            res.status(400).send({
                status: "Error create EO data",
                msg: error
            })
        }
    }

    async loginUserEO(req: Request, res: Response) {
        try {
            console.log(req.body)
            const userEo = await prisma.eO.findFirst({
                where: {
                    OR: [{ email: req.body.data }, { username: req.body.data }],
                },
            });

            if (!userEo) throw "User EO or email not found"

            const validPassword = await compare(req.body.password, userEo.password)

            if (!validPassword) throw "Please enter correct password"

            const token = createToken({
                id: userEo!.id,
                role: 'user EO'
            }, "1d");

            res.status(200).send({

                status: "ok",
                msg: "login success",
                token,
                userEo,
            })

        } catch (error) {
            res.status(400).send({
                status: "Error login",
                msg: error
            })
        }
    }
}