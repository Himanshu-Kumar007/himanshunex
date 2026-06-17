import express from "express"
import cors from "cors";


import cookieParser from "cookie-parser";

import database from "./routes/db.js"



import contact from './routes/contact.routes.js'
import  enquiry  from "./routes/enquiry.routes.js"
import registration from "./routes/registration.routes.js"
import login from "./routes/login.routes.js"
import dotenv from 'dotenv'


const app = express()
dotenv.config();
app.use(cookieParser());
database();


app.use(cors());


app.use(express.json())

app.get("/", (req,res)=>{
    res.send("This is the home page")
})  

app.use("/contact", contact)
app.use("/enquiry", enquiry)
app.use("/registration", registration)
app.use("/login", login)


app.listen(process.env.Port , ()=>{
    console.log(`Running on ${process.env.Port}`)
});