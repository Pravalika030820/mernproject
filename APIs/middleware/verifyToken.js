const jwt = require("jsonwebtoken");
require("dotenv").config();


const verifyToken = () => {
    //get token from header of req
    let token = req.headers.token;
    //check token existence
    if(token === undefined) {
        res.send({message: "Unauthorized request... kindly login to continue "})
    }
    //if token is there
    else{
        //verify token
        try{
            jwt.verify(token,process.env.SECRET_KEY);
            next()
        }
        catch(err){
            next(err)
        }
    }
};

module.exports = verifyToken;