const Product = require("../models/product.model.js");

module.exports = {
    creatNewProduct: (req, res)=>{
        Product.create(req.body)
        .then((newProduct)=>{
            console.log(newProduct);
            res.json(newProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewProduct!");
            res.status(400).json(err)
        })
    },

    findAllProducts: (req, res)=>{
        Product.find()
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts)
            })
            .catch((err)=>{
                console.log("findAllProducts has failed");
                res.json({message: "Something went wrong with findAll", error: err})
            })
    },

    findOneProduct: (req, res)=>{
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err)=>{
                console.log("findOneProduct has failed!");
                res.json({message: "Something went wrong with findOneProduct", error: err})
            })
    },
}
    