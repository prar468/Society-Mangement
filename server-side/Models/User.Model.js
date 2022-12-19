const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required:true
    },
    lastName: {
        type: String,
        trim: true,
        required:true
    },
    email: {
        type: String,
        trim: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // role: {
    //     type: mongoose.Types.ObjectId,
    //     required:true
    // },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    // defaultSpace:{
    //     type: mongoose.Types.ObjectId,
    //     required:true
    // },
    // headUser:{
    //     type:String,
    //     required:true
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
        default: 'Super Admin'
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    updated_by: {
        type: String,
        default: 'Super Admin'
    },
})

UserSchema.pre('save', async function (next) {
    try {
        /* 
        Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
        */
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
        }
        if (this.isModified('spin')) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.spin, salt)
            this.spin = hashedPassword
        }
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const User = mongoose.model('user', UserSchema)

module.exports = User
