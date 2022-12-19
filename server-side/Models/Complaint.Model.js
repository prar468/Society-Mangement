const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TableSchema = new Schema({
    title: {
        type: String,
        index: true
    },
    // remark: {
    //     type: String,
    //     index: true
    // },
    description: {
        type: String,
        index: true
    },
    date:{
        type:Date,
        required:true
    },
    name: {
        type: String,
        index: true
    },
    contact:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    is_active: {
        type: Boolean,
        default: true,
        index: true
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


const Table = mongoose.model('complaint', TableSchema)

module.exports = Table