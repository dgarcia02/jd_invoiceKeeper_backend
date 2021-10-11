const express = require('express')
const router = express.Router()
// grabbing the invoice model
const Invoices = require('../models/invoices.js')

// Routes
// GET index
router.get('/', (req, res) => {
    Invoices.find({}, (error, foundInvoices) => {
        res.json(foundInvoices)
    })
})



// Seed Route
router.get('/seed', (req, res) => {
    Invoices.create(
        [
            {
                
            }
        ]
    )
})