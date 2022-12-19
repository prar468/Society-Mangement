const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TableSchema = new Schema({
    id:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    name: {
        type: String,
        index: true
    },
    address:{
        type:String,
        required:true
    },
    remark:{
        type:String
    },
    amount:{
        type:Number,
        required:true
    },
    paymentType:{
        type:String
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


const Table = mongoose.model('payment', TableSchema)

module.exports = Table