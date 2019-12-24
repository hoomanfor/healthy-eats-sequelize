const connection = require("./connection.js");

const orm = {
    all: function(table, callback) {
        const query = "SELECT * FROM " + table + ";";
        connection.query(query, function(error, data) {
            if (error) throw error;
            callback(data);
        })
    },
    add: function(table, column, value, callback) {
        const query = "INSERT INTO " + table + " (" + column + ") VALUES (?);"
        connection.query(query, value, function(error, data) {
            if (error) throw error; 
            callback(data);
        })
    },
    update: function(table, eaten, id, callback) {
        const query = "UPDATE " + table + " SET consumed = " + eaten + " WHERE id = " + id; 
        connection.query(query, function(error, data) {
            if (error) throw error;
            callback(data);
        })
    }
};

module.exports = orm;