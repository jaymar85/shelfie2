require("dotenv").config();
const express = require("express");
const massive = require("massive");
const inventoryController = require("./controllers/inventoryController");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING) 
    .then(dbInstance => {
        app.set("db", dbInstance)
    })
    .catch(err => console.log(err));

app.use(express.json()); //Allows access to request body aka req.body

//endpoints
app.get('/api/inventory', inventoryController.getInventory);
app.post('/api/product', inventoryController.addProduct); // handlerCreate in Form.js

// const port = 5000;
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`);
});