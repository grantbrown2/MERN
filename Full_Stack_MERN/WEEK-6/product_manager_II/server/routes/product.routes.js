const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/product', ProductController.getAllProducts);
    app.get('/product/:id', ProductController.getOneProduct);
    app.post('/product', ProductController.newProduct);
}