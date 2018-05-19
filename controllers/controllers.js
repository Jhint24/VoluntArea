var express = require("express");
var router = express.Router();
var exphbs = require('express-handlebars');
//Import the model
var voluntareaModel = require("../models/voluntarea.js");
var Handlebars = require('handlebars')

//create routes and set the logic
//org route to show all current orgs
var express = require("express");
var router = express.Router();
//Import the model
var voluntareaModel = require("../models/voluntarea.js");

//create routes and set the logic

//A default, catch-all route that leads to home.html
router.get("/", function (req, res) {
    var hbsObject1 = {
        title: "Home"
    }
    res.render("index", hbsObject1);
});
//org route to show all current orgs
router.get("/events", function (req, res) {
    //3 of 3 cbs
    voluntareaModel.readOrgs(function (data) {
        var hbsObject2 = {
            orgs: data
        };
        //console.log(hbsObject2);
        res.render("events", hbsObject2);
    });
    //GET THE ABOVE WORKING FIRST

        var app = express();

                var hbs = exphbs.create({
                    // Specify helpers which are only registered on this instance.
                    helpers: {
                        splice: function (){
                            var spliceDate = '';
                            for (var i = 0; i < org_date.length; ++i) {
                            spliceDate = org_date[i].slice(3,8);
                            console.log(spliceDate);
                        }

                        }
                    }

                });
            });



        // //org routes specific to its id
        // router.get("/orgs/:id", function(req, res)  {
        //     var condition = {
        //         id: req.params.id
        //     };
        //     console.log("condition: ",condition);
        //     voluntareaModel.read(condition, function(data)  {
        //         var hbsObject = {
        //             orgs: data
        //         };
        //         console.log(hbsObject);
        //         res.render("index", hbsObject);
        //     });
        // });

        // //post to the db
        // router.post("/api/vols", function(req, res) {
        //     voluntareaModel.create("vols")
        // })
        module.exports = router;










        // router.get("/events", function(req, res)  {
        //     //3 of 3 cbs
        //     voluntareaModel.readOrgs(function(data)  {
        //         var hbsObject = {
        //             orgs: data
        //         };
        //         console.log(hbsObject);
        //         res.render("index", hbsObject);
        //     });
        // });
        //GET THE ABOVE WORKING FIRST

        // //org routes specific to its id
        // router.get("/orgs/:id", function(req, res)  {
        //     var condition = {
        //         id: req.params.id
        //     };
        //     console.log("condition: ",condition);
        //     voluntareaModel.read(condition, function(data)  {
        //         var hbsObject = {
        //             orgs: data
        //         };
        //         console.log(hbsObject);
        //         res.render("index", hbsObject);
        //     });
        // });

        // //post to the db
        // router.post("/api/vols", function(req, res) {
        //     voluntareaModel.create("vols")
        // })
        module.exports = router;