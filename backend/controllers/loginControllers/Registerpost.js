import createUser from "../../models/loginModel/createUser.js";

import { Router } from "express";
const router = Router();

router.post("/createUser", createUser);

export default router;