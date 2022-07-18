import dotenv from "dotenv";
dotenv.config();
import { connectDatabase } from "../controllers/connectionDatabase.js";
import express from "express";


//const express = require('express')
const app = express()
const port = 3000


app.use(express.json())


const startApp = async () => {

  await connectDatabase();

  app.get('/', (req, res) => {
    res.send('"JE SUIS UNE PUTAIN DE GENIE! "Le mechant dans Golden Eye.')
  })
  app.post('/', (req, res) => {
    res.send(`J'adore les petits pains d'épices!`)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }
  )
}

startApp();
