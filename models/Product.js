const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const Cart = require('./cart');
const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {    
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    
    constructor(title, imageUrl, description, price) {
        this.title = title,
        this.imageUrl = imageUrl,
        this.description = description,
        this.price = price;
    }

    save() {
        this.id =  uuid.v4().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), err => {
                console.log(err);
            });
        });           
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(filePath, JSON.stringify(updatedProducts), err => {
                if(!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });
        });
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}