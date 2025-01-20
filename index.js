//Main index file, handles files.

//Dependencies
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config')
const auth = require("./auth.js")
const admin = require("./adminauth.js")
//const gamestep = require("./game_steps.js")
//const game= require("./gamelogic.js")

//Things, main variables, etc.
const app = express();
const port = config.port || 3000; //Eh.

app.use(express.json()) 



app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

app.use("/auth", auth.app) //Authentication Code.
app.use("/admin", admin)
//app.use("/start",  game) //Game Logic Code.

