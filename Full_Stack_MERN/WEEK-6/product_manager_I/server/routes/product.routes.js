const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/product', ProductController.getAllProducts);
    app.post('/product', ProductController.newProduct);
}