import express from "express"

import Enquiry from "../model/enquiry.model.js"



export const enquiry = async (req, res) => {
    try {

        const { name, mobile, address, message } = req.body;

        if (!name || !mobile || !address) {
            return res.status(400).json({
                successs: false,
                msg: "Fill all the details"
            });
        }

        const details = await Enquiry.create({
            name,
            mobile,
            address,
            message
        });

        res.status(201).json({
            successs: true,
            msg: "We have recieved your response, Our team will contact you soon"
        });

    } catch (error) {
        res.status(500).json({
            successs: false,
            msg: error.message

        });

    }
}

export const get_enquiry = async (req, res) => {
    try {

        const data = await Enquiry.find({})
        res.status(200).json({
            successs: true,
            data
        });

    } catch (error) {
        res.status(509).json({
            successs: false,
            msg: error.message
        });

    }
}





export const updateEnquiry = async (req, res) => {
    try {

        const { id } = req.params;
        const { name, mobile, address, message } = req.body;

        const updatedEnquiry = await Enquiry.findByIdAndUpdate(
            id,
            {
                name,
                mobile,
                address,
                message
            }
        );

        if (!updatedEnquiry) {
            return res.status(404).json({
                successs: false,
                msg: "Enquiry not found"
            });
        }

        res.status(200).json({
            successs: true,
            msg: "Enquiry updated successfully",
            data: updatedEnquiry
        });

    } catch (error) {
        res.status(500).json({
            successs: false,
            msg: error.message
        });
    }
};