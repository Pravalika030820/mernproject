//create mini exp app
const exp = require("express")
const productApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const Product = require("./models/productModel")
const verifyToken = require("./middleware/verifyToken")


//get products
productApp.get(
    "get-products", verifyToken,
    expressAsyncHandler(async(req,res)=> {
        let products = await Product.find()
        res.send({message: "products", payload:products})
    })
);

//export
module.exports = productApp;
