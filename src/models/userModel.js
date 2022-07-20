//const mongoose = require('mongoose');// require is not defined in ES module scope, you can use import instead
import mongoose from "mongoose";
const { Schema } = mongoose;

const journeySchemaUser = new Schema({
    firstname: String,
    lastname: String,
    adress: String,
});

export const JourneyUser = mongoose.model('JourneyUser', journeySchemaUser);
//module.exports = JourneyUser;
