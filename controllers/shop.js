const Product = require('../models/Product');
const Cart = require('../models/Cart');


exports.getProducts = (req, res, next) => {
    Product.fetchAll( products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products'
        });
    });
}

exports.getProductById = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('shop/product-details', 
            { product: product, 
              pageTitle: product.title,
              path: '/products/' 
            });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll( products => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your cart', 
        path: '/cart'
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById( prodId, product => {
        Cart.addProduct( prodId, product.price );
    });
    res.redirect('/cart');
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', 
        path: '/checkout'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders', 
        path: '/orders'
    });
};
