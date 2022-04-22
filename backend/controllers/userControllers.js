const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const jwt = require("jsonwebtoken");
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
       return res.status(400).send({message:"User already exists"})
        // throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });
    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET);
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:token,
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

module.exports = { registerUser };