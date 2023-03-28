require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
             useNewUrlParser: true,
             useUnifiedTopology: true});
             console.log(process.env.MONGO_URI);
             console.log('Connected to DB')
    } catch(err){
        console.log(err);
            console.error('Error connecting to DB')
            process.exit(1);
    }
}

module.exports = connectDB;
