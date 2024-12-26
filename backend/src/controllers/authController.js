import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";
const saltRounds = 10;
const JWT_SECRET =process.env.JWT_SECRET;

export const signup = async (data, res) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    const userObj = { ...data, password: hashedPassword };
    const newUser = await Users(userObj).save();
    if (newUser) {
      res
        .status(200)
        .json({ status: "success", message: "User registered successfully!" });
    } else {
      res
        .status(400)
        .json({ status: "error", message: "Email already exists" });
    }
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ status: "error", message: "Signup failed." });
  }
};

export const login = async (data, res) => {
  try {
    const { email, password } = data;
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email or password." });
    }
    const isverified = await bcrypt.compare(password, user.password);
    if (!isverified) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email or password." });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username, role: user.role,},
      JWT_SECRET,
      { expiresIn: "2 days" }
    );
    res.status(200).json({
      status: "success",
      message: "Logged in successfully!",
      token,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ status: "error", message: "Login failed." });
  }
};
