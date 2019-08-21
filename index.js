"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const returnName = "Mr." + name;
    res.status(200).send({ name: returnName });
});

module.exports = app;