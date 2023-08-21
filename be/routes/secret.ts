import { Router, Request, Response } from "express";
import { onlyUser } from "../middlewares/onlyUser";

const router = Router()

router.get("/", onlyUser, (req: Request, res: Response) => {
  res.json({msg : "secret"})
})
export default router

