const mongoose =require("mongoose");

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected")
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;