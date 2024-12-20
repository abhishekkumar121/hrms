const jwt = require("jsonwebtoken");

const jwtValidationMiddleware = (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = jwtValidationMiddleware;
// const jwt = require("jsonwebtoken");

// const jwtValidationMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");
//   //chcek for token
//   if (!token) {
//     res.status(401).json({ message: "No token,authorization denied!" });
//   }

//   try {
//     //Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     //add user from payload
//     req.user = decoded;
//     next();
//   } catch (e) {
//     res.status(400).json({ message: "Token is not valid" });
//   }
// };
// module.exports = jwtValidationMiddleware;
