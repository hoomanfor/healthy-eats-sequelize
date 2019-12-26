const db = require("../models");

module.exports = (app) => {

    app.get("/", function(request, response) {
        db.Eat.findAll({ include: [db.Moment],
        order: [["name", "ASC"]] }).then((data) => {
            const eats = {
                "eats": data
            }
            // response.json(eats);
            response.render("index", eats);
        })
    });

    app.post("/api/eats", function(request, response) {
        db.Eat.create({
            name: request.body.eat,
        }).then((data) => {
            response.status(201).end();
        })
    });

    app.put("/api/eats/:id", function(request, response) {
        db.Eat.update({
            consumed: request.body.consumed,
            MomentId: request.body.moment
        }, {
            where: { id: request.params.id }
        }).then((data) => {
            response.status(200).end();
        })
    })

}


