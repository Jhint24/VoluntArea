var connection = require("./config/connection.js");

var orm = {

    selectAll: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result)   {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb)   {
        var queryString = "INSERT INTO ?? SET ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb)   {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    deleteOne: function(table, cols, vals, cb)   {
        var queryString = "DELETE FROM ?? SET ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
}

module.exports = orm;