import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { z } from "zod";

const env = z.object({JWT_SECRET_KEY: z.string()}).parse(process.env)

export const onlyUser = (req:Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.sendStatus(401)
  const token = authHeader.split(" ")[1]
  try {
    const verifiedUser = jwt.verify(token, env.JWT_SECRET_KEY)
    // zoddal verifyolom
    res.locals.user = verifiedUser
    next()
  } catch (error) {
    return res.sendStatus(401)
  }
}