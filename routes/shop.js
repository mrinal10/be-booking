const express = require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    const products = adminData.product;
    //res.sendFile(path.join(__dirname, '../','views', 'shop.pug'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;
