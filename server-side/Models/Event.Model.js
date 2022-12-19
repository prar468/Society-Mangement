const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TableSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    type:{
        type: String,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
        required:true
    },
    venue:{
        type: String,
        trim: true,
        required:true
    },
    // totalMembers:{
    //     type:Number
    // },
    image:{
        type:Buffer,
    },
    // organizerName:{
    //     type: String,
    //     trim: true,
    //     required:true
    // },
    // organizerContact:{
    //     type: String,
    //     trim: true,
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


const Table = mongoose.model('event', TableSchema)

module.exports = Table