//ICI c'est le CRUD du AccomodationController

import { Accommodation } from '../models/accomodationModel.js';

//create CRUD for accomodations from accommodation.model.js

    //Création d'un hébergement
    const addAccommodation = async (req, res) => {
        const { name, address, city, country, zipCode, description, stars } = req.body;
        const journeyAccommodation = new Accommodation({
            name,
            address,
            city,
            country,
            zipCode,
            description,
            stars,
        });
        await journeyAccommodation.save();
        console.log('########################### Accommodation saved ###########################');
        res.send('Accommodation saved');
    }

    //Récupération de tous les hébergements
    const getAccommodations = async (req, res) => {
        const accomodations = await Accommodation.find();
        res.send(accomodations);
    }

    //Récupération d'un hébergement par son id
    const getAccommodationById = async (req, res) => {
        const { id } = req.params;
        const accomodation = await Accommodation.findById(id);
        console.log('########################### Accommodation found ###########################');
        res.send(accomodation);
    }

    //Modification d'un hébergement
    const updateAccommodation = async (req, res) => {
        const { id } = req.params;
        const { name, address, city, country, zipCode, description, stars } = req.body;
        const accomodation = await Accommodation.findByIdAndUpdate(id, {
            name,
            address,
            city,
            country,
            zipCode,
            description,
            stars,
        });
        console.log('########################### Accommodation updated ###########################');
        res.send(accomodation);
    }

    //Suppression d'un hébergement
    const deleteAccommodation = async (req, res) => {
        const { id } = req.params;
        await Accommodation.findByIdAndDelete(id);
        console.log('########################### Accommodation deleted ###########################');
        res.send('Accommodation deleted');
    }

    export { addAccommodation, getAccommodations, getAccommodationById, updateAccommodation, deleteAccommodation };

    
