import mongoose from "mongoose";
const { Schema } = mongoose;



const travelSchema = Schema(
    {
        name: {type: String,required: true,},
        description: {type: String},
        price: {type: Number,required: true},
        flight: [{ type: Schema.Types.ObjectId, ref: "JourneyFlight" }],
        accommodation: [{ type: Schema.Types.ObjectId, ref: "JourneyAccommodation" }]
    },
);

const TravelModel = mongoose.model("JourneyTravel", travelSchema);
export default TravelModel;



