const Product = require('../models/product.model');

module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products);
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id : req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err));
}