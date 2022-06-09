require('dotenv').config;

const productsData= require('./data/Product');
const connectData= require('./config/db');
const Product = require('./models/product');
const connectDB = require('./config/db');

connectDB();

const importData= async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productsData)

        console.log('Data imported successfully');

        process.exit();
    } catch(e){
        console.error('Error importing Data: ' + e.message);
        process.exit(1);
    }
};

importData();