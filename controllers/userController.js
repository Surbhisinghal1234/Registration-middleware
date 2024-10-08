
import Register from "../models/register.js"; 
import bcrypt from "bcrypt"

export  const registerUser = async (req, res) => {
  const { firstName, lastName, password, email, phoneNumber } = req.body;

  try {
    const userExist = await Register.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Register({ 
      firstName, 
      lastName, 
      email, 
      password: hashedPassword, 
      phoneNumber 
    });

    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
    console.log(newUser);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "error" });
  }
};


