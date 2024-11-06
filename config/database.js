const mongoose = require("mongoose");

require('dotenv').config();
const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        UseNewUrlParser:true,
        UseUnifiedTopology: true,
    })
    .then(console.log("DB Connected Established"))
    .catch((error) => {
        console.log("DB Connection Problem");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectWithDB;