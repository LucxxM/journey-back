//ICI c'est le CRUD DES TRAVELS
import { Travel } from '../models/travelModel.js';  
import { User } from '../models/userModel.js';  
import { Flight } from '../models/flightModel.js';
import { Accomodation } from '../models/accomodationModel.js';


//Create Crud for travel from travel model 

    //Create a travel
    const addTravel = async (req, res) => {
        const {  name, description, price, startDate, endDate, flightId, accomodationId, userId } = req.body;

        const user = await User.findById(userId);
        const fligth = await Flight.findById(req.body.flightId);
        const accomodation = await Accomodation.findById(req.body.accomodationId);

        const travel = new Travel({
            name, 
            description,
            price,
            startDate,
            endDate,
            flightId,
            accomodationId,
            userId,
        });
        await travel.save();
        console.log('########################### travel saved ###########################');
        res.send('travel saved');
    }

    //Get all travels
    const getTravels = async (req, res) => {
        const travels = await Travel.find();
        res.send(travels);
    }

    //Get a travel by id
    const getTravelById = async (req, res) => {
        const { id } = req.params;
        const travel = await Travel.findById(id);
        console.log('########################### travel found ###########################');
        res.send(travel);
    }

    //Update a travel
    const updateTravel = async (req, res) => {
        const { id } = req.params;
        const { name, description, price, startDate, endDate, flightId, accomodationId, userId } = req.body;
        const travel = await Travel.findByIdAndUpdate(id, {
            name,
            description,
            price,
            startDate,
            endDate,
            flightId,
            accomodationId,
            userId,
        });
        console.log('########################### travel updated ###########################');
        res.send(travel);
    }

    //Delete a travel
    const deleteTravel = async (req, res) => {
        const { id } = req.params;
        await Travel.findByIdAndDelete(id);
        console.log('########################### travel deleted ###########################');
        res.send('travel deleted');
    }

    export { addTravel, getTravels, getTravelById, updateTravel, deleteTravel };
    





