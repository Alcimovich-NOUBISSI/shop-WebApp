const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
                throw new Error('Email is not valid.');
            }
        }
    },
    hashedAndSaltedPassword: {
        type: String,
        required: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    address: {
        country: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String
    },
    shippingAddress: {
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    isActive: Boolean,
    payment: {
        isVerified: Boolean,
        mean: [ String ],
        card: {
            operator:  String,
            panLastFour:  Number,
            expirationMonth:  Number,
            expirationyear:  Number,
            cvvVerified:  Boolean
        },
        mobile: {
            operator:  String,
            number:  Number
        }
    },
    email: String
})

const User = mongoose.model('User', userSchema);
module.exports = User;
