import login from "../../models/loginModel/login.js";
import { Router } from "express";
const router = Router();

router.post("/", login);

export default router;