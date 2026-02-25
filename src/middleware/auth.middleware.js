const jwt = require("jsonwebtoken");
const blacklist = require("../utils/tokenBlacklist");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  if (blacklist.has(token))
    return res.status(401).json({ message: "Logged out token" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
