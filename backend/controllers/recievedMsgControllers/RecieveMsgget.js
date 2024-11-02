import recievedmsgs from "../../models/recievedMsgModel/recievedMsgs.js";

import { Router } from "express";
const router = Router();

router.get("/", recievedmsgs);

export default router;