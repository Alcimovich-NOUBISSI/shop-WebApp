const Order = require('../models/Order')

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json(orders)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getOrdersByCustomerId = async (req, res) => {
    try {
        const order = await Order.find({'email' : req.body.email})
        res.json(order)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

const editOrder = async (req, res) => {
    try {  
        await Order.findOneAndUpdate({_id: req.params.id}, {'status': req.body.status})
        res.json({message: 'success'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const postOrders = async (req, res) => {
    try {
        console.log(req.body)
        const newOrder = new Order (req.body)
        // const newOrder = new Order ({
        //     "user": {
        //         "shippingAddress": {
        //             "street1": "50 Work Street",
        //             "street2": "Floor 16",
        //             "city": "Chicago",
        //             "state": "IL",
        //             "zip": 60601
        //         },
        //         "payment": {
        //             "operator": "visa",
        //             "mean": "card"
        //         },
        //         "customerId": "639f295409c595df724fff92",
        //         "lname": "Fanatic"
        //     },
        //     "status": false,
        //     "items": [
        //         {
        //             "_id": "63bbe57cca878b9b2abd5818",
        //             "name": "Iphone 12",
        //             "countInStock": 2,
        //             "price": 14.99,
        //             "discount": 1,
        //             "preTaxTotal": 27.98,
        //             "tax": 1,
        //             "total": 28.98
        //         }
        //     ],
        //     "paymentStatus": "paid",
        //     "totalCost": 12,
        //     "carrier": "Amazon",
        //     "duration": 3,
        //     "deliveryDate": "2023-01-04T23:00:00.000Z"
        // })
        await newOrder.save((error)=>{
            if(error){
                console.log(error)
            }
           })
        res.status(201).json({message: 'success'})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getOrders, 
    editOrder,
    postOrders,
    getOrdersByCustomerId
} 