const express = require("express");
const router = express.Router();
const model = require("../models/model.js");

router.get("/", function(request, response) {
    model.all(function(data) {
        const eats = {
            "eats": data
        }
        response.render("index", eats);
    })
});

router.post("/api/eats", function(request, response) {
    model.add(request.body.column, request.body.value, function(data) {
        response.status(200).end(); 
    })
});

router.put("/api/eats/:id", function(request, response) {
    model.update(request.body.consumed, request.params.id, function(data) {
        if (data.changedRows == 0) {
            return response.status(404).end();
        } else {
            return response.status(200).end();
        }
    })
})

module.exports = router;

