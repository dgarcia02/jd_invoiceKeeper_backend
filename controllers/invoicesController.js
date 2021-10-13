const express = require('express')
const router = express.Router()
// grabbing the invoice model
const Invoices = require('../models/invoices.js')

// =========== Routes =========== //
// GET index
router.get('/', (req, res) => {
    res.send('index')
})


// router.get('/', (req, res) => {
//     Invoices.find({}, (error, foundInvoices) => {
//         res.json(foundInvoices)
//     })
// })



// =========== Seed Route =========== //
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
                parts: {
                    items: [
                        {
                            qty: 1,
                            description: 'hub assembly',
                            price: 85,
                            amount: 85,
                        }
                    ],
                    totalParts: 85
                },
                labor: {
                    items: [
                        {
                            itemNumber: 1,
                            description: 'change hub housing & fan clutch assembly & belt',
                            amount: 480
                        }
                    ],
                    totalLabor: 480
                },
                miscellaneous: {
                    items: {
                        machineShop: 0,
                        towService: 500,
                        roadService: 50,
                        computerProgram: 0,
                        diagnostic: 0,
                        shopMaterials: 25,
                        afterHours: 0   
                    },
                    totalMiscellaneous: 575
                },
                notes: '',
                invoiceAmount: {
                    tax: 100,
                    grandTotal: 2678
                }
            }
        ]
    )
})

module.exports = router;