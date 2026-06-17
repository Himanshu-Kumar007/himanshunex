import mongoose from "mongoose";

const details = new mongoose.Schema({

    full_name:{
        type: String,
        required:true,
        trim:true
    },

    email:{

        type: String,
        required: true,
        unique: true,
        trim: true

    },

    phone_number:{
        type : String,
        required: true,
        unique: true,
        trim: true
    },

    message:{
         type: String,
        required:true,
        trim:true
    }


})

const Details = mongoose.model("Details", details)

export default Details