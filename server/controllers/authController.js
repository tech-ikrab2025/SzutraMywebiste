import contactusinfo from "../models/contactusinfo.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/mailsend.js";

// Register new user
export const register = async (req, res) => {
  try {
    const { name, phoneno, email, message } = req.body;    
    let user = await contactusinfo.findOne({ email });
    if (user) return res.status(400).json({ msg: "Contact details already exists" });

    //const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(password, salt);

    user = new contactusinfo({ name, phoneno, email, message });
    await user.save();
    const mailSent = await sendMail(name, phoneno, email, message);
    if (mailSent) {
    res.status(201).json({ msg: "Contact details submitted successfully, we will get back to you shortly" });
    } else {
    res.status(500).json({ msg: "Failed to send mail" });
    }    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await contactusinfo.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get user profile (Protected)
export const getProfile = async (req, res) => {
  try {
    const user = await contactusinfo.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};