const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = String(req.headers.authorization)
    .replace(/^bearer|^jwt/i, "")
    .replace(/^\s+|\s+$/gi, "");
    console.log(token);
  try {
    if (token == undefined) {
      return res.status(403).json({
        statusCode: 403,
        msg: "vous devez fournir un token valide",
      });
    }
    /*  verification du token            */
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      msg: "Invalid Token",
    });
  }
  return next();
};

module.exports = verifyToken;
