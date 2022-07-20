import mongoose from "mongoose";
const { Schema } = mongoose;

//const JourneyUser = require('../models/userModel.js');//require is not defined in ES module scope, you can use import instead
import { JourneyUser } from "../models/userModel.js";

export const addUserTest = async () => {

    const journeyUser = new JourneyUser({
        firstname: 'Howling',
        lastname: 'Mad',
        adress: 'The A-Team',
    });

    await journeyUser.save();
    console.log('########################### user saved ###########################');

    const users = JourneyUser.find();
    //console.log(users);
    console.log('########################### user found ###########################');

}
