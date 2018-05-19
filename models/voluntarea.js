var orm = require("../config/orm.js");

// create the code that will call the ORM functions
var voluntareaModel = {
    readOrgs: function(cb) {
        orm.read("orgs", function(res)  {
            //one of the 3 cbs called
            cb(res);
        });
    },
    
    readVols: function(cb) {
        orm.read("vols", function(res)  {
            //one of the 3 cbs called
            cb(res);
        });
    },

    create: function(cols, vals, cb)    {
        orm.create("orgs", cols, vals, function(res)  {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("voluntarea_db", objColVals, condition, function(res)   {
            cb(res);
        });
    }
};
//Export for controller

module.exports = voluntareaModel;