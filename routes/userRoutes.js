import express from "express";
import validateUserRegistration from "../middleware/registerValidation.js";
// import Register from "../models/register.js"; 
// import bcrypt from "bcrypt"
import { registerUser } from "../controllers/userController.js";
const router = express.Router();


router.post('/register', validateUserRegistration, registerUser);
export default router;
