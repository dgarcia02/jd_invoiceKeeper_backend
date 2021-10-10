// Dependencies //
const express = require('express')
const mongoose = retuire('mongoose')
const cors = require('cors')
const app = express()

// Controllers //


// Middleware //


// Database //
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.get('/', (req, res) => {
    res.send('hello')
})

mongoose.connection.once('open', () => {
    console.log('Connected to Mongod...');
})

// Port //
app.listen(3000, () => {
    console.log('listening on port ...', 3000);
})