import { sign } from 'jsonwebtoken'

interface IPayLoad{
    id: number
    role: string
}

const secret = process.env.SECRET_KEY || " "

export const createToken = (payload: IPayLoad, expires : string = "1d") => {
    const token = sign (payload, secret, {expiresIn: expires});
    return token
}
