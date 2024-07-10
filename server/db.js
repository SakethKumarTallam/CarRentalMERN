// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cars = require("./data/cars");
// const users = require("./data/users");
// const Car = require("./models/carModel");
// const User = require("./models/userModel");

// dotenv.config();

// function connectDB() {
//     mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

//     const connection = mongoose.connection;

//     connection.on('connected', () => {
//         console.log('MongoDB Connection Successful');
//     });

//     connection.on('error', (error) => {
//         console.log('MongoDB Connection Error:', error);
//     });
// }

// async function seedDatabase() {
//     try {
//         await Car.deleteMany();
//         console.log('All cars deleted');

//         await User.deleteMany();
//         console.log('All users deleted');

//         await Car.insertMany(cars);
//         console.log('All cars added');

//         await User.insertMany(users);
//         console.log('All users added');
//     } catch (error) {
//         console.error('Error seeding the database:', error);
//     }
// }

// connectDB();
// seedDatabase();

// module.exports = mongoose;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cars = require("./data/cars");
const users = require("./data/users");
const Car = require("./models/carModel");
const User = require("./models/userModel");
const Booking = require("./models/bookingModel"); // Import the Booking model

dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('MongoDB Connection Successful');
    });

    connection.on('error', (error) => {
        console.log('MongoDB Connection Error:', error);
    });
}

async function seedDatabase() {
    try {
        await Booking.deleteMany(); // Delete all bookings
        console.log('All bookings deleted');

        await Car.deleteMany(); // Delete all cars
        console.log('All cars deleted');

        await User.deleteMany(); // Delete all users
        console.log('All users deleted');

        await Car.insertMany(cars); // Add new cars
        console.log('All cars added');

        await User.insertMany(users); // Add new users
        console.log('All users added');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

connectDB();
seedDatabase();

module.exports = mongoose; 
