const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const employeRoute = require("./routes/employeRoutes");

// use

app.use("/employee", employeRoute);

app.get("/", (req, res) => {
  res.send("This is our Hotel Radison");
});

app.listen("3000", () => {
  console.log("server is running on port: 3000");
});

/*
   DataBase Operation                 ======                HTTP method
   C -> CREATE                        =====>                POST
   R -> READ                          =====>                GET
   U -> UPDATE                        =====>                PUT
   D -> DELETE                        =====>                DELETE
*/

// for testing purpose of git...

// dRrEdOAsndO6lq8o
