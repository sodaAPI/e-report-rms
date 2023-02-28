import { Login, logOut, Me } from "../controllers/Auth.js";
import { verifyUser } from "../middleware/AuthUser.js";
import express from "express";
import rateLimit from "express-rate-limit";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  msg: "Too many login attempts, please try again later after 5 minutes",
});

router.get("/me", Me);
router.post("/login", loginLimiter, Login);
router.delete("/logout", verifyUser, logOut);

export default router;
