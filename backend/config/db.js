require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://isidore:isi_123@cluster0.moypk.mongodb.net/shopDB?retryWrites=true&w=majority",{
             useNewUrlParser: true,
             useUnifiedTopology: true});
             console.log('Connected to DB')
    } catch(err){
            console.error('Error connecting to DB')
            process.exit(1);
    }
}

module.exports = connectDB;
