import express from "express";
import { Login, Logout, Register , Test1} from "../controllers/user.js";

const router=express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/test").get(Test1);

export default router;