import { Login, logOut, Me } from "../controllers/Auth.js";
import express from "express";

const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
