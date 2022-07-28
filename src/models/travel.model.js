import mongoose from "mongoose";
const { Schema } = mongoose;


const travelSchema = Schema(
    {
        name: {type: String,required: true,},
        description: {type: String},
        price: {type: Number,required: true},
        startDate: {type: Date,required: true},
        endDate: {type: Date,required: true},
        flightId: [{ type: Schema.Types.ObjectId, ref: "JourneyFlight" }],
        accommodationId: [{ type: Schema.Types.ObjectId, ref: "JourneyAccommodation" }],
        userId : [{ type: Schema.Types.ObjectId, ref: "JourneyUser" }] 
    },
);

const TravelModel = mongoose.model("JourneyTravel", travelSchema);
export default TravelModel;



