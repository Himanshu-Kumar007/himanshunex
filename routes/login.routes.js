import express from "express"

const routes = express.Router()


import {login}  from "../controller/login.controller.js"


routes.post("/login", login)

export default routes