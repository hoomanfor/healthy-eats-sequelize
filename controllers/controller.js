// const express = require("express");
// const router = express.Router();
// const Eat = require("../models/model.js");

const db = require("../models");

module.exports = (app) => {

    app.get("/", function(request, response) {
        db.Eat.findAll({}).then((data) => {
            const eats = {
                "eats": data
            }
            response.render("index", eats);
        })
    });

    app.post("/api/eats", function(request, response) {
        db.Eat.create({
            name: request.body.eat,
            // MomentId: 1
        }).then((data) => {
            response.status(201).end();
        })
    });

    app.put("/api/eats/:id", function(request, response) {
        db.Eat.update({
            consumed: request.body.consumed
        }, {
            where: { id: request.params.id }
        }).then((data) => {
            response.status(200).end();
        })
    })

}


