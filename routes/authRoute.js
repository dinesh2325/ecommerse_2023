import express from "express";
import JWT from "jsonwebtoken";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//test
router.get("/test", requireSignIn, isAdmin, testController);

//forget password
router.post("/forgot-password", forgotPasswordController);

//user protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin protected route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;