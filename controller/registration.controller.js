import express from "express"

import Registration from "../model/registration.model.js"





export const registration = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            msg: "Fill all the details"
        }

        const user = await Registration.find({ email })

        if (user.email) {
            msg: "Email already exist"
        }

        const register = await Registration.create({
            email,
            password
        });

        res.status(201).json({
            successs: true,
            msg: "Resgistration Successfull",
            user
        })

    } catch (error) {
        res.status(500).json({
            successs: false,
            msg: error.message
        })

    }

}