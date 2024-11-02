import recievedmsgs from "../../models/recievedMsgModel/recievedMsgs.js";

import { Router } from "express";
const router = Router();
router.get("/:userName", recievedmsgs);

export default router;