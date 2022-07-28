import mongoose from "mongoose";
const { Schema } = mongoose;
import { JourneyFlight } from "../../models/flight.model.js"; 

export const addFlightTest = async () => {

    const journeyFlight = new JourneyFlight({
        companyName: 'Air France',
        departureDate: 22/22/22,
        arrivalDate: 24/22/22,
        departureCity: 'Paris',
        arrivalCity: 'Bali',
    });

    await journeyFlight.save();
    console.log('########################### Flight saved ###########################');

    // const users = JourneyUser.find();
    // console.log(users.firstname);
    

}
