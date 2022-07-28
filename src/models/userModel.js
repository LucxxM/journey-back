//const mongoose = require('mongoose');

import mongoose from "mongoose";
const { Schema } = mongoose;


const journeySchemaUser = new Schema({
    firstname: String,
    lastname: String,
    adress: String,
  });

export const JourneyUser = mongoose.model('JourneyUser', journeySchemaUser);