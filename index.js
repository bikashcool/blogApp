const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blog = require("./routes/blog");
app.use("/api/v1", blog);

const connectWithDB = require('./config/database');
connectWithDB();

app.listen(PORT, () => {
    console.log(`App started at port no. ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`<h1>This is My HomePage</h1>`)
});