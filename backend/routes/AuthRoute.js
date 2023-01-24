import { Login, logOut, Me } from "../controllers/Auth.js";
import express from "express";
import rateLimit from "express-rate-limit";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 5, // limit each IP to 5 login attempts per windowMs
  message: "Too many login attempts, please try again later"
});

router.get("/me", Me);
router.post("/login", loginLimiter, Login);
router.delete("/logout", logOut);

export default router;
