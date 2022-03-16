const ProductController = require("../controllers/product.controller");

module.exports=(app)=> {

    app.get("/api/products", MovieController.findAllProducts);

    app.post("/api/products", MovieController.creatNewProduct);

    app.get("/api/products/:id", MovieController.findOneProduct);

    app.delete("/api/products/:id", MovieController.deleteOneProduct);

    app.put("/api/products/:id", MovieController.updateProduct);
}