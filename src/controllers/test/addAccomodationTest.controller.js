import mongoose from "mongoose";
const { Schema } = mongoose;
import { JourneyAccomodation } from "../../models/accommodation.model.js"; 

export const addAccomodationTest = async () => {

    const journeyAccomodation = new JourneyAccomodation({
        name: "Hotel Paris",
        address: "1 rue de la paix",
        city: "Paris",
        country: "France",
        zipCode: "75001",
        description: "Hotel de luxe",
    });

    await journeyAccomodation.save();
    console.log('########################### Accomodation saved ###########################');

    // const users = JourneyUser.find();
    // console.log(users.firstname);




}
