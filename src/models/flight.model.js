import mongoose from "mongoose";
const { Schema } = mongoose;


const flightSchema = Schema(
  {
    companyName: {type: String,required: true},
    departureDate: {type: Date,required: true},
    arrivalDate: {type: Date,required: true},
    departureCity: {type: String},
    arrivalCity: {type: String}
  }

);

export const JourneyFlight = mongoose.model('JourneyFlight', flightSchema);