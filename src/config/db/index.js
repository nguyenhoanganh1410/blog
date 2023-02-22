// Using Node.js `require()`
const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_database');
        console.log("connection sucessfully!");
    } catch (error) {
        console.log("connection failer!");
    }
}

module.exports = {connect}