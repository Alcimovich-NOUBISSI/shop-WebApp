require('dotenv').config();
const express= require('express');
const connectDB= require('./config/db');
const productRoutes = require('./routes/productRoutes');


connectDB();

const app = express();
const PORT= process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productRoutes);
aoi.use(express.static(path.join(__dirname + "/public")))

app.listen(PORT, ()=>{
    console.log(`server up and running on port ${PORT}`)
});
