const  mongoose  = require("mongoose")

const orderSchema = 
{
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    items:[{
        name:{
            type: String,
            required: true
        },
        countInStock: Number,
        price:{
            type: Number,
            required: true
        },
        discount: Number,
        preTaxTotal: Number,
        tax: Number,
        total: {
            type: Number,
            required: true
        }
    }],
    user:{
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        lname:{
            type: String,
            required: true
        },
        shippingAddress:{
            street1:{
                type: String,
                required: true
            },
            street2: String,
            city: String,
            state:String,
            zip:Number
        },
    payment:{
        mean:{
            type: String,
            required: true
        },
        operator:{
            type: String,
            required: true
        }}
    },
    paymentStatus:{
        type: String,
        required: true
    },
    totalCost:{
        type: Number,
        required: true
    },
    carrier:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
}

const Order = mongoose.model('Order', orderSchema)
module.exports = Order  
