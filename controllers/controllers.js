var express = require("express");
var router = express.Router();
//Import the model
var voluntareaModel = require("../models/voluntarea.js");

//create routes and set the logic
//org route to show all current orgs
router.get("/orgs", function(req, res)  {
    //3 of 3 cbs
    voluntareaModel.read(function(data)  {
        var hbsObject = {
            orgs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//org routes specific to its id
router.get("/orgs/:id", function(req, res)  {
    var condition = {
        id: req.params.id
    };
    console.log("condition: ",condition);
    voluntareaModel.read(condition, function(data)  {
        var hbsObject = {
            orgs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});