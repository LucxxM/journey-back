import mongoose from "mongoose";
const { Schema } = mongoose;

// create model for accommodation
const accommodationSchema = Schema(
    {
        name: String,
        address: String,
        city: String,
        country: String,
        zipCode: String,
        description: String,
        stars: Number,

    },

);

export const JourneyAccomodation = mongoose.model("JourneyAccommodation", accommodationSchema);