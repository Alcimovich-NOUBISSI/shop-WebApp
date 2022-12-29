require('dotenv').config();
const express= require('express');
const path = require('path');
const connectDB= require('./config/db');
const productRoutes = require('./routes/productRoutes');


connectDB();

const app = express();
const PORT= process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(PORT, ()=>{
    console.log(`server up and running on port ${PORT}`)
});

// if("production" === "production") {
//     app.use(express.static(path.join(__dirname, '/public')))
//     app.get('*', (req,res) => {
//         res.sendFile(path.join(__dirname, 'public', 'index.html' ))
//     })
// } else {
//     app.get('/', (req,res)=>{
//         res.send('Api running')
//     })
// }
