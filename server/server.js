// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const db=require('./db')

// const app = express();
// dotenv.config();

// // Middleware
// app.use(express.json());
// app.use(cors());


// // Routes
// app.use('/api/cars', require('./routes/carsRoute'));
// app.use('/api/users', require('./routes/usersRoute'));
// app.use('/api/bookings', require('./routes/bookingsRoute'));

// // Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// // Start Server
// const port = process.env.PORT || 5001;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./db');

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/bookings', require('./routes/bookingsRoute'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Serve the React app from the build folder
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));

    // For all other requests, serve the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start Server
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

