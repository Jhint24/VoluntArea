var connection = require("../config/connection.js");



var orm = {

    read: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result)   {
            if (err) throw err;
            console.log(result)
            //one of the 3 cbs called
            cb(result);
        });
    
    },
    create: function(table, cols, vals, cb)   {
        var queryString = "INSERT INTO ?? SET ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb)   {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;