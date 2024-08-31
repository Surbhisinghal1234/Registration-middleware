import express from "express";
import validateUserRegistration from "../middleware/registerValidation.js";
import Register from "../models/register.js"; 

const router = express.Router();

  // register route
router.post('/register',validateUserRegistration, async (req, res) => {
    try {
      const user = new Register(req.body);
      await user.save();
      res.status(200).json({ message: 'user registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'error' });
    }
  });
  

export default router;
