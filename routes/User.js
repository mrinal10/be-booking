const path = require('path');

const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

/*const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);*/

router.post('/login', userController.userlogin);
router.post('/logout', userController.userlogout);

module.exports = router;