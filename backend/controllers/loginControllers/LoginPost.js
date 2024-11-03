import login from "../../models/loginModel/login.js";
import changePassword from "../../models/loginModel/changePassword.js";
import { Router } from "express";
const router = Router();

router.post("/", login);
router.post("/changepassword",changePassword);

export default router;