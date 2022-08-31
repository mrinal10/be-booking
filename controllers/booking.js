const roomBooking = require('../components/bookroom');

exports.booking = (req, res, next) => {
    let bookingResponse = roomBooking.bookroom(req);
   
    if ( bookingResponse instanceof Error ) {
        res.send("booking failed");
    }
    res.send("booked successfully");
};