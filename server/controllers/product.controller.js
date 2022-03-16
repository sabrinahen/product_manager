const Product = require("../models/product.model.js");

module.exports = {
    creatNewProduct: (req, res)=>{
        Movie.create(req.body)
        .then((newProduct)=>{
            console.log(newProduct);
            res.json(newProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewProduct!");
            res.status(400).json(err)
        })
    },
}
    