// ============== Dependencies ============== //
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


// ============== Controllers ============== //
const invoicesController = require('./controllers/invoicesController.js')


// ============== Configuration ============== //
const app = express()
const db = mongoose.connection;


// ============== Middleware ============== //
app.use(express.json())
app.use(cors())
require('dotenv').config()
app.use('/invoices', invoicesController)


// ============== PORT ============== //
const PORT = process.env.PORT || 3003;


// ============== Database ============== //
// connect via heroku or locally
const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)


// ============== Routes ============== //
app.get('/', (req, res) => {
    // res.send('hello')
    res.redirect('/invoices')
})


// ============== Connection Error/Success ============== //
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// ============== Listener ============== //
app.listen(3000, () => {
    console.log('listening on port ...', 3000);
})