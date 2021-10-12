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
                invoiceNumber: 001,
                customer: {
                    name: 'diamond carriers', 
                    from: 'laredo, tx',
                    phone: 9563333854
                 },
                date: 10/11/2021,
                truckInfo: {
                    truckNumber: 123,
                    make: 'Freightliner',
                    engine: 'DD-15'
                },
                parts: [
                    {
                        qty: 1,
                        description: String,
                        price: Number,
                        amount: Number,
                        totalParts: Number
                    }
                ],
                labor: {
                    itemNumber: Number,
                    description: String,
                    amount: Number,
                    totalLabor: Number
                },
                miscellaneous: {
                    items: {
                        machineShop: Number,
                        towService: Number,
                        roadService: Number,
                        computerProgram: Number,
                        diagnostic: Number,
                        shopMaterials: Number,
                        afterHours: Number   
                    },
                    totalMiscellaneous: Number
                },
                notes: String,
                invoiceAmount: {
                    tax: Number,
                    grandTotal: Number
                }
            }
        ]
    )
})