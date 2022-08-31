const Booking = require('../models/mongo/Booking');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/booking")

exports.bookroom = (req) => {
    console.log(req.body.roomid, req.body.date, req.body.from, req.body.to);

    run();

    async function run() {
        const booking = new Booking({ roomid: req.body.roomid, 
            date: req.body.date, 
            fromdate: req.body.from, 
            todate: req.body.to});

        let validated = validateBooking(req.body.roomid, req.body.from, req.body.to);
        console.log("validated {}", validated);
        if(validated instanceof Error) {
            return "Error while booking";
        }
        if(validated) {
            await booking.save();
            console.log("saved >> " + booking);
            return "data successfully inserted";
        } 
        return "already booked";
    }

    //TODO add validation logic
    function validateBooking(roomid, startdate, todate) {
        //validate room id
        //validate is available for the time period
        return true;
    }

    return "booked successfully";
};