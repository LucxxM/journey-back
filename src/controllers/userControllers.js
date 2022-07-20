//ICI C'EST LE CRUD BITCH !

import { JourneyUser } from '../models/userModel.js';



//Création d'un utilisateur
const addUser = async (req, res) => {
    const { firstname, lastname, adress } = req.body;
    const journeyUser = new JourneyUser({
        firstname,
        lastname,
        adress,
    });
    await journeyUser.save();
    console.log('########################### user saved ###########################');
    res.send('user saved');
}

//Récupération de tous les utilisateurs
const getUsers = async (req, res) => {
    const users = await JourneyUser.find();
    res.send(users);
}

//Récupération d'un utilisateur par son id
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await JourneyUser.findById(id);
    console.log('########################### user found ###########################');
    res.send(user);
}

//Modification d'un utilisateur
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, adress } = req.body;
    const user = await JourneyUser.findByIdAndUpdate(id, {
        firstname,
        lastname,
        adress,
    });
    console.log('########################### user updated ###########################');
    res.send(user);
}

//Suppression d'un utilisateur
const deleteUser = async (req, res) => {
    const { id } = req.params;
    await JourneyUser.findByIdAndDelete(id);
    console.log('########################### user deleted ###########################');
    res.send('user deleted');
}


export { addUser, getUsers, getUserById, updateUser, deleteUser };