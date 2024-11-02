import sendMsg from "../../models/sendMsgModel/sendMsg.js";
import { Router } from "express";

const router = Router();

router.post("/", sendMsg);

export default router;