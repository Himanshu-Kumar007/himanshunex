import mongoose from "mongoose";
import express from "express"

const details = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },
    himanshu:{
        type:String,
    },
    mobile:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    address:{
         type: String,
        required: true,
        trim: true

    },
     message:{
        type: String,
        
        trim: true

    }
})

    const Enquiry = mongoose.model("Enquiry", details)
    export default Enquiry