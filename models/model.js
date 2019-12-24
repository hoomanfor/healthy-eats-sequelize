const orm = require("../config/orm.js");

const model = {
    all: function(callback) {
        orm.all("eats", function(data) {
            callback(data);
        })
    },
    add: function(column, value, callback) {
        orm.add("eats", column, value, function(data) {
            callback(data);
        })
    },
    update: function(consumed, id, callback) {
        orm.update("eats", consumed, id, function(data) {
            callback(data);
        })
    }
}

module.exports = model;