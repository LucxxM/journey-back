import dotenv from "dotenv";
dotenv.config(  { path: '../.env' } );
import { connectDatabase } from "./controllers/connectionDbController.js";
import express from "express";
//import { findUser } from "./models/userModel.js";
//import { getUsers, getUserById, updateUser } from "./controllers/userControllers.js";
import router from "./routes/userRoute.js"


//For Test PURPOSE ONLY
import { addUserTest } from "./controllers/test/addUserTestController.js";// for test purpose
import { addFlightTest } from "./controllers/test/addFlightTest.controller.js";
import { addAccomodationTest } from "./controllers/test/addAccomodationTest.controller.js";


//const express = require('express')
const app = express()
const port = 3000
//const UserRoute = require ('./routes/userRoute.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', router);


const startApp = async () => {
  await connectDatabase();

  await addUserTest();// for test purpose
  await addFlightTest();// for test purpose
  await addAccomodationTest();// for test purpose

  //await findUser();
  //await addUser();

  app.listen(port, () => {
      console.log(`I AM LISTENNING THE SERVER ON PORT ${port}, WITNESS ME!`)
    }
  )

  
}

startApp();



// app.get('/', (req, res) => {
//   res.send('"JE SUIS UNE PUTAIN DE GENIE! "Le mechant dans Golden Eye.')
// })
// app.post('/', (req, res) => {
//   res.send(`J'adore les petits pains d'épices!`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }
// )