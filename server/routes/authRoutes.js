import express from "express";
import {register} from "../controllers/authController.js";
import {tokenizeMiddleware} from "../middleware/tokenizeauthMiddleware.js";

const router = express.Router();

router.post("/register", tokenizeMiddleware, register);

//module.exports = router;
export default router;