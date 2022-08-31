// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: ''
// });

const mongoose = require('mongoose');
const documnetdb = mongoose.connect("mongodb://localhost:27017/booking", {
    useNewUrlParser:true, useUnifiedTopology:true
}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("successfully connected")
    }
});

module.exports = documnetdb;