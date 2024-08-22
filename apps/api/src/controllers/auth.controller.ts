import { createToken } from "@/helpers/createToken";
import { hashPass } from "@/helpers/hashPassword";
import { referalCodeGenerator } from "@/helpers/referalcodegenerator";
import prisma from "@/prisma";
import { compare } from "bcrypt";
import { Request, Response } from "express";

export class AuthController {
    async createUserData(req: Request, res: Response) {
        try {
            const newUser = await prisma.user.findFirst({
                where: { email: req.body.email }
            })
            if (newUser?.email == req.body.email) throw "Email already exist"

            const password = await hashPass(req.body.password);

            const createUser = await prisma.user.create({
                data: {
                    ...req.body, password,
                    referal: referalCodeGenerator()
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

async loginUser (req: Request, res: Response) {
    try {
        console.log(req.body)
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: req.body.email }],
            },
        });

        if (!user) throw "User or email not found"

        const validPassword = await compare(req.body.password, user.password)

        if(!validPassword) throw "Please enter correct password"

        const token = createToken({
            id: user!.id,
            role: 'user'
        }, "1d");

        res.status(200).send({
            status: "ok",
            msg: "login success",
            token,
            user,
        })
        
    } catch (error) {
        res.status(400).send({
            status: "Error create user data",
            msg: error
        })
    }
}
}