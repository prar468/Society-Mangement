const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TableSchema = new Schema({
    name: {
        type: String,
        index: true
    },
    contact:{
        type:String
    },
    purpose: {
        type: String
    },
    houseOwnerName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true,
        index: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_by: {
        type: String,
        default: 'self'
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    updated_by: {
        type: String,
        default: 'self'
    },
})


const Table = mongoose.model('guest', TableSchema)

module.exports = Table