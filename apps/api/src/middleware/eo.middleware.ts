import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export class EoMiddleware {
    verifyToken(req: Request, res: Response, next: NextFunction) {
        try {
            let token = req.headers.authorization?.replace("Bearer ", "")
            if (!token) throw "Token empty"

            const verifyUser = verify(token, process.env.SECRET_KEY!)
            // console.log(verifyUser);
            req.user = verifyUser as User

            next()
        } catch (err) {
            res.status(400).send({
                status: "error",
                msg: err
            })
        }
    }

    checkRole(req: Request, res: Response, next: NextFunction) {
        try {
            if(req.user?.role !== "eo") throw "Admin only"

            next()
        } catch (err) {
            res.status(400).send({
                status: "error",
                msg: err
            })
        }
    }
}