require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400)
                .json({ message: "user doesn't exists" })
        } else if (await bcrypt.compare(req.body.password, user.hashedAndSaltedPassword)) {
            console.log('logged in')
            //res.json({email : req.body.email})
            res.status(303).send({message: "logged in"})

        } else if (!await bcrypt.compare(req.body.password, user.hashedAndSaltedPassword)) {
            res.json({ message : 'bad password' })
        }
    }
    catch (err) {
        console.log(err);
    }
}


const register = async (req, res) => {
    try {
        const data = JSON.parse(req.body.data)

        const user = await User.findOne({ email: data.email })

        console.log(user);

        if (user) {
            res.json({ message: "user already exists" })
        }
        const encryptedpassword = await bcrypt.hash(data.password, 10)

        const newUser = new User({
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            hashedAndSaltedPassword: encryptedpassword,
            emailVerified: true,
            address: {
                country: data.country,
                street1: data.street1,
                street2: data.street2,
                city: data.city,
                state: data.state,
                zip: data.zip
            },
            shippingAddress: {
                street1: data.street1,
                street2: data.street2,
                city: data.city,
                state: data.state,
                zip: data.zip,
                country: data.country
            },
            isActive: true,
            payment: {
                isVerified: true,
                mean: [data.mean],
                card: {
                    operator: data.operator,
                    panLastFour: data.pan,
                    expirationMonth: 1,
                    expirationyear: 2025,
                    cvvVerified: true
                },
                mobile: {
                    operator: data.operator,
                    number: data.number
                },
            },
            email: data.email,
        })

        newUser.save()
        console.log("user saved");

        /*(error) => {
            if (error) {
                console.log(error)
            }
        }*/

        /*res.json({ "email": req.body.email })*/

    } catch (err) {
        console.error(err);
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find({ email: req.body.email })
        res.json(users)
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const editUser = async (req, res) => {
    try {
        await User.findOneAndUpdate({ email: req.body.email }, { 'fname': 'Jane' })
        res.json({ message: 'success' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const checkEmail = async (req, res) => {
    const email = req.body.email
    try {
        await User.findOne({ email: email })
        res.status(500).json({ message: "email already exist" })
    } catch (error) {
        res.status(200).json({ message: error })
    }

}

module.exports = {
    register,
    getUser,
    editUser,
    login,
    checkEmail
}