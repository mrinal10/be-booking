const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomid: String,
    isActive: Boolean,
    acEnabled: Boolean,
    canAccomodate: String,
    price: String,
    isAvailableHourly: Boolean
});

module.exports = mongoose.model("Room", roomSchema);