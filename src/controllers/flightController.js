//ICI c'est le CRUD du FlightController

import { Flight } from '../models/flightModel.js';

//create CRUD for flights

    //Création d'un vol
    const addFlight = async (req, res) => {
        const { companyName, departureDate, arrivalDate, departureCity, arrivalCity } = req.body;
        const journeyFlight = new Flight({
            companyName,
            departureDate,
            arrivalDate,
            departureCity,
            arrivalCity,
        });
        await journeyFlight.save();
        console.log('########################### Flight saved ###########################');
        res.send('Flight saved');
    }

    //Récupération de tous les vols
    const getFlights = async (req, res) => {
        const flights = await Flight.find();
        res.send(flights);
    }

    //Récupération d'un vol par son id
    const getFlightById = async (req, res) => {
        const { id } = req.params;
        const flight = await Flight.findById(id);
        console.log('########################### Flight found ###########################');
        res.send(flight);
    }

    //Modification d'un vol
    const updateFlight = async (req, res) => {
        const { id } = req.params;
        const { companyName, departureDate, arrivalDate, departureCity, arrivalCity } = req.body;
        const flight = await Flight.findByIdAndUpdate(id, {
            companyName,
            departureDate,
            arrivalDate,
            departureCity,
            arrivalCity,
        });
        console.log('########################### Flight updated ###########################');
        res.send(flight);
    }

    //Suppression d'un vol
    const deleteFlight = async (req, res) => {
        const { id } = req.params;
        await Flight.findByIdAndDelete(id);
        console.log('########################### Flight deleted ###########################');
        res.send('Flight deleted');
    }

    export { addFlight, getFlights, getFlightById, updateFlight, deleteFlight };


