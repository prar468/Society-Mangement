const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TableSchema = new Schema({
    name: {
        type: String,
        index: true
    },
    address: {
        type:String,
        required:true
    },
    adminName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    // id:{
    //     type:mongoose.Types.ObjectId,
    //     required:true
    // },
    // defaultSpace:{
    //     type:mongoose.Types.ObjectId,
    //     required:true
    // },
    // status: {
    //     type: String
    // },
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


const Table = mongoose.model('society', TableSchema)

module.exports = Table