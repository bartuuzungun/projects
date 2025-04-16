import jwt from "jsonwebtoken";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Lütfen giriş yapın" });
  }
};

const admin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin yetkisi gerekli" });
  }
  next();
};

module.exports = { auth, admin };
