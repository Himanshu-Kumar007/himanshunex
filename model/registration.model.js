import mongoose from "mongoose";

const registration = new mongoose.Schema({

        email:{
            type: String,
            required: true,
            unique:true,
            trim:true

        },

        password:{
            type:String,
            unique:true,
            required:true,
            trim:true
        }


})

const Registration = mongoose.model("Registration", registration)
export default Registration