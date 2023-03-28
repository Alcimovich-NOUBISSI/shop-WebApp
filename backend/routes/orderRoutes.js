const express = require('express')
const router = express.Router()
const {
    getOrders,
    postOrders,
    editOrder,
    getOrdersByCustomerId
} = require('../controller/orderController')

router.post('/sendOrder', postOrders)
router.get('/orders', getOrders)
router.post('/editOrder/:id', editOrder)
router.get('/order/:id', getOrdersByCustomerId)

module.exports = router