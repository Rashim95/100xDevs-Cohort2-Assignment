const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config.js");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

const token = req.headers.authorization;
const seperateToken = token.split(" ");
const jwtToken = seperateToken[1];
const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
if(decodedValue.username){
    next();
}else{
    res.status(403).json({msg: "Unable to authenticate"})
}
}

module.exports = adminMiddleware;