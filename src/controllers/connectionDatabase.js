import pkg from "mongoose"; // cant use named import here ?
const { connect } = pkg;


// const mongoose = require('mongoose');



export const connectDatabase = async () => {

    // connect(process.env.MONGO_DB_HOST, {
    //     user: process.env.MONGO_DB_USER,
    //     dbName: process.env.MONGO_DB_DATABASE,
    //     pass: process.env.MONGO_DB_PASS,
    //     maxPoolSize: 10, // Maintain up to 10 socket connections
    //     // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    //     // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    //   });

      //
      
    await connect('mongodb://root:root@localhost:27017/voyage?authSource=admin&authMechanism=SCRAM-SHA-1');// je sais foutre pas pourquoi ni comment le authSource fonctionne 
    console.log('########################### connected to database ###########################');

   


}

//connectDatabase().catch(err => console.log(err));
// module.exports.Journey = mongoose.model('Journey', journeySchema);

