import express from "express"

const routes = express.Router()


import {registration}  from "../controller/registration.controller.js"


routes.post("/registration",registration)

export default routes