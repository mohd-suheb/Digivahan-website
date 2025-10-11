const mongoose = require('mongoose');

const connectdb = async (req, res)=>{

    try {
        const conc = await mongoose.connect(process.env.MONGODB_URL,{
              useNewUrlParser: true,
              useUnifiedTopology: true,
        });

        console.log(`mongodb connected`);
        
    }catch (error) {
     console.error(`mongodb connection error`);
     process.exit(1); //stop the server if db fails
        
        
    }
}

module.exports = connectdb;