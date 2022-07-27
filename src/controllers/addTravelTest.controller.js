import mongoose from "mongoose";
const { Schema } = mongoose;
import { JourneyTravel } from "../models/travel.model";

export const addUserTest = async () => {

    const journeyTravel = new JourneyTravel({
///////


        /////////
    });

    await journeyTravel.save();
    console.log('########################### user saved ###########################');

    // const users = JourneyUser.find();
    // console.log(users.firstname);
    

}
