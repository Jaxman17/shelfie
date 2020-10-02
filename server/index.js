require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}})
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});



app.get("/api/items", ctrl.getItems);
app.post("/api/items", ctrl.addItems);
app.put("/api/items", ctrl.editItems);
app.delete("/api/items", ctrl.deleteItems);

app.listen(SERVER_PORT, () => {
  console.log(`Running on port: ${SERVER_PORT}`);
});