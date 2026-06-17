import express from "express"
import Registration from "../model/registration.model.js"

import jwt from "jsonwebtoken"



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                successs: false,
                msg: "Fill all the details"
            });
        }

        const logging = await Registration.findOne({ email });

        if (!logging) {
            return res.status(404).json({
                successs: false,
                msg: "User not found"
            });
        }

        if (logging.password !== password) {
            return res.status(401).json({
                successs: false,
                msg: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: logging._id,
                email: logging.email
            },
            process.env.key,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            successs: true,
            token,
            msg: "You are logged in"
        });

    } catch (error) {
        return res.status(500).json({
            successs: false,
            msg: error.message
        });
    }
};