require('dotenv').config();
const express= require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB= require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT= process.env.PORT || 5000;


app.use('/api/products', productRoutes);
app.use('/', userRoutes)
app.use('/', orderRoutes)


app.listen(PORT, ()=>{
    console.log(`server up and running on port ${PORT}`)
});

app.post('/postSomething', (req, res)=>{
    console.log(req.body)
    res.send("ok")
})

if(process.env.ENVIRONMENT === "production") {
    app.use(express.static(path.join(__dirname, '/public')))
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '/public', 'index.html' ))
    })
} else {
    app.get('*', (req,res)=>{
        res.send('Api running')
    })
}