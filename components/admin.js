const Room = require('../models/mongo/Room');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/booking", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

exports.addroom = (req) => {
    console.log(req.body.roomid, 
        req.body.active, 
        req.body.accomodate, 
        req.body.price);

    run();
 
    function run() {

        const room = new Room({ 
            roomid: req.body.roomid, 
            isActive: req.body.active, 
            acEnabled: req.body.acenabled, 
            canAccomodate: req.body.accomodate, 
            price: req.body.price,
            isAvailableHourly: req.body.hourly
        });

        Room.find({ roomid: req.body.roomid}, (err, result) => {
            if (err){
                room.save();
                console.log("saved >> " + room);
            }else{
                console.log("Data Already present", result);
            }
        });
    }
};