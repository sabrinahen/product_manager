const ProductController = require("../controllers/product.controller");

module.exports=(app)=> {

    app.get("/api/products", ProductController.findAllProducts);

    app.post("/api/products", ProductController.creatNewProduct);

    app.get("/api/products/:id", ProductController.findOneProduct);

    app.delete("/api/products/:id", ProductController.deleteOneProduct);

    app.put("/api/products/:id", ProductController.updateProduct);
}