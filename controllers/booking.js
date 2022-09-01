const roomBooking = require('../components/room');

exports.booking = (req, res, next) => {
    

    roomBooking.bookroom(req).then( bookingResponse  => {
        console.log(bookingResponse);
        res.send("booked successfully");
    }).catch(err => {
        console.log(err);
        res.send("booking failed");
    });
    
    
};

exports.rooms = (req, res) => {
    roomBooking.getrooms().then( roomResponse  => {
        console.log(roomResponse);
        res.send(roomResponse);
    }).catch(err => {
        console.log(err);
        res.send("get rooms failed");
    });
    
    
};