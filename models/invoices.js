const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Schema
const invoiceSchema = new Schema({
    invoiceNumber: { type: Number, required: true, unique: true },
    customer: {
        name: { type: String, required: true }, 
        location: {
            city: String,
            state: Number
        },
        phone: Number
    },
    date: { type: Date, required: true},
    truckInfo: {
        truckNumber: { type: Number, required: true },
        make: String,
        engine: String
    },
    parts: {
        items: [
            {
                qty: Number,
                description: String,
                price: Number,
                amount: Number,
            }
        ],
        totalParts: Number
    },
    labor: {
        items: [
            {
                itemNumber: Number,
                description: String,
                amount: Number
            }    
        ],
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
}, { timestamps: true });

// sets up collection in database
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;