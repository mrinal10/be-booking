const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

const ads = [
    {title: 'Hello, world (again)!'}
  ];
  
  //dummy api
app.get('/ads', (req, res) => {
    res.send(ads);
});

const errorController = require('./controllers/error');
const documentdb = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

const bookingRoutes = require('./routes/Booking');
const userRoutes = require('./routes/User');
const adminRoutes = require('./routes/Admin');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/booking', bookingRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
    console.log("running on port:3000");
});