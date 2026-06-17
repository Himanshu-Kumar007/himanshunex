import express from "express"

import Details from "../model/contactus.model.js"







export const contact = async (req, res) => {
    try {

        const { full_name, email, phone_number, message } = req.body;

        if (!full_name || !email || !phone_number || !message) {
            msg: "Fill all the details"
        }

        const details = await Details.create({
            full_name,
            email,
            phone_number,
            message

        });

        res.status(201).json({
            successs: true,
            msg: "Details saved , Our team will contact you soon"
        })





    } catch (error) {
        res.status(500).json({
            successs: false,
            msg: error.message
        });

    }
}








