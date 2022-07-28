import mongoose from "mongoose";
const { Schema } = mongoose;
import { JourneyTravel } from "../../models/travel.model";

export const addTravelTest = async () => {

    const journeyTravel = new JourneyTravel({
        name: "Travel to Paris",    
        description: "Travel to Paris with a nice car",
        price: 10000,
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-02"),
        flightId: "",
        accommodationId: "",
        userId: " ",
    });

    await journeyTravel.save();
    console.log('########################### Travel saved ###########################');



}
