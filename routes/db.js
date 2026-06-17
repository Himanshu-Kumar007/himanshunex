import mongoose from "mongoose";
import express from "express"

const database = async ()=>{
    try {
        
        const db_conn = await mongoose.connect(process.env.dblink)

        console.log("Connected Successfully")



    } catch (error) {
        console.log("Not Connected")
        
    }
}

export default database