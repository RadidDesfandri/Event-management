import { createToken } from "@/helpers/createToken";
import { hashPass } from "@/helpers/hashPassword";
import { referalCodeGenerator } from "@/helpers/referalcodegenerator";
import prisma from "@/prisma";
import { compare } from "bcrypt";
import { Request, Response } from "express";

export class AuthControllerEo {
    async createEoData(req: Request, res: Response) {
        try {
            const newEo = await prisma.eO.findFirst({
                where: { email: req.body.email }
            })
            if (newEo?.email == req.body.email) throw "Email already exist"

            const password = await hashPass(req.body.password);

            const createEo = await prisma.eO.create({
                data: {
                    ...req.body, password,
                }
            })
            res.status(200).send({
                status: "success created user",
                data: createEo
            })
        } catch (error) {
            res.status(400).send({
                status: "Error create user data",
                msg: error
            })
        }
    }

async loginEo (req: Request, res: Response) {
    try {
        console.log(req.body)
        const eo = await prisma.eO.findFirst({
            where: {
                OR: [{ email: req.body.email }],
            },
        });

        if (!eo) throw "User or email not found"

        const validPassword = await compare(req.body.password, eo.password)

        if(!validPassword) throw "Please enter correct password"

        const token = createToken({
            id: eo!.id,
            role: 'eo'
        }, "1d");

        res.status(200).send({
            status: "ok",
            msg: "login success",
            token,
            eo,
        })
        
    } catch (error) {
        res.status(400).send({
            status: "Error create user data",
            msg: error
        })
    }
}
}