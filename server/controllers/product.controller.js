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

    deleteOneProduct: (req, res)=>{
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct)=>{
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err)=>{
                console.log("deleteOneProduct has failed!");
                res.json({message: "Something went wrong with deleteOneProduct", error: err})
            })
    },

    updateProduct: (req, res)=> {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            // Tom said hint hint when talking about runValidators!!!
            )
            .then((updatedProduct)=>{
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong in updateProduct!");
                res.status(400).json(err)
            }
            )
    }
}
    