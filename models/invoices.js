const mongoose = require('mongoose')

// Schema
const invoiceSchema = new mongoose.Schema(
    {
        invoiceNumber: Number,
        customer: {
            name: String, 
            from: String,
            phone: Number
        },
        date: Date,
        truckInfo: {
            truckNumber: Number,
            make: String,
            engine: String
        },
        parts: [
            {
                qty: Number,
                description: String,
                price: Number,
                amount: Number,
                totalParts: Number
            }
        ],
        labor: [
            {
                itemNumber: Number,
                description: String,
                amount: Number,
                totalLabor: Number
            }
        ],
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
)

const Invoices = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoices;