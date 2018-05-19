var connection = require("../config/connection.js");



var orm = {

    read: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result)   {
            if (err) throw err;
            console.log("This is read " + result)
            //one of the 3 cbs called
            cb(result);
        });
    
    },
    readOrgsDate: function(cb)  {
        var queryString = "SELECT date_format(org_date, '%b %d, %Y') FROM orgs";
        connection.query(queryString, function(err, result)   {
            if (err) throw err;
            console.log("This is read Orgs Date " + result)
            //one of the 3 cbs called
            cb(result);
        });
    },
    create: function(table, cols, vals, cb)   {
        console.log(cols);
        console.log(vals);
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {

            if (err) {
             console.log(this.sql);
             console.log(err);   
            };
            console.log("This is create " + result);

            cb(result);
        });
    },

    createDateChange: function(cb)   {
        var queryString = "INSERT INTO orgs (org_date) VALUES(STR_TO_DATE(org_date,'%c/%e/%y'));";
        connection.query(queryString, function(err, result) {

            if (err) {
             console.log(this.sql);
             console.log(err);   
            };
            console.log("This is create " + result);

            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb)   {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) throw err;
            console.log("This is update " + result);
            cb(result);
        });
    }
}

module.exports = orm;