const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6)
 
function signJwt(username, password) {

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword)
    
    return signature;

}


function verifyJwt(token) {
   try {
    const verified = jwt.verify(token, jwtPassword)
    return true;
   } catch (error) {
      console.log(error);
   }
   return false;
}


function decodeJwt(token) {
   const decoded = jwt.decode(token) ? true:false;
   return decoded;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
