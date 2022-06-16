const router = require('express').Router()
const User = require('../models/User')

//REGISTER
router.post("/register", async (req, res) =>
{
    // if (!req.body.username || !req.body.password || !req.body.email)
    //     return res.status(400).json("Please provide username, email, password")


    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try
    {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err)
    {
        res.status(500).json(err)
    }

})

module.exports = router