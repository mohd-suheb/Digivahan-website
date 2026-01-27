const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(' MongoDB connected succesfully' );
  } catch (error) {
    console.error(' MongoDB connection error: ' + error.message);
    process.exit(1);
  }
}

module.exports = connectdb;