require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING) 
    .then(dbInstance => {
        app.set("db", dbInstance)
    })
    .catch(err => console.log(err));

app.use(express.json()); 
//endpoints

// const port = 5000;
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`);
});