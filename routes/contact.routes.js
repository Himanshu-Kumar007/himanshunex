import express from "express"

const routes = express.Router()


import {contact}  from "../controller/contact.controller.js"

routes.post("/contact", contact)


export default routes