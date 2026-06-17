import express from "express"

const routes = express.Router()


import { enquiry, get_enquiry, updateEnquiry} from "../controller/enquiry.controller.js"


routes.post("/enquiry", enquiry)
routes.get("/getenquiry", get_enquiry)

routes.put("/enquiry/:id", updateEnquiry)


export default routes