const Product = require('../models/product');

const getAllProducts = async (req, res)=>{
    try{
        const products = await Product.find({})
        res.json(products);
    } catch(err){
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

const getProductById = async (req, res)=>{
    try{
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch(err){
        console.error(err);
        res.status(500).json({message: err.message});
    }
    
}

module.exports ={
    getAllProducts,
    getProductById,
}