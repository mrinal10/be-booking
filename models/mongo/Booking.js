const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price: String,
    tax: String
});

const userSchema = new mongoose.Schema({
    name: String,
    id_type: String,
    id_no: String,
    is_govt_id: Boolean
});

const bookingSchema = new mongoose.Schema({
    roomid: String,
    date: String,
    fromdate: String,
    todate: String,
    roomId: String,
    user_details: userSchema,
    price: priceSchema
});


module.exports = mongoose.model("Booking", bookingSchema);