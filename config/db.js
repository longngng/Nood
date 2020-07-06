const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const parser = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connectDB = async () => {
    try {
        await mongoose.connect(db,parser);

        console.log('MongoDb connected');
    }   catch(err) {
        console.error(err.message);
        //Exit process with error
        process.exit(1);
    }
}
module.exports = connectDB;
