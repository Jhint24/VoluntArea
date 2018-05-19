//create routes and set the logic
//org route to show all current orgs
var express = require("express");
var router = express.Router();
var exphbs = require('express-handlebars');
var moment = require('moment')
//Import the model
var voluntareaModel = require("../models/voluntarea.js");

//create routes and set the logic

      //A default, catch-all route that leads to home.html
  router.get("/", function(req, res) {
    var hbsObject1 = {
        title: "Home"
    }
    res.render("index", hbsObject1);
  });
//org route to show all current orgs
router.get("/events", function(req, res)  {
    //3 of 3 cbs
    voluntareaModel.readOrgs(function(data)  {
    var spliceDate = '';

    for (var i=0; i<data.length; i++) {
    spliceDate = data[i].org_date;
    var date = moment(spliceDate);
    var dateComponent = date.utc().format('ll');
    data.org_date = dateComponent
    console.log(dateComponent);
    
    

        var hbsObject2 = {
            orgs: data
            //orgs: data
            //orgs: dateComponent
        };
    }
        //console.log(hbsObject2);
        res.render("events", hbsObject2);
    });
});

router.get("/orgs", function(req, res)  {
    //3 of 3 cbs
    voluntareaModel.readOrgs(function(data)  {
        var hbsObject2 = {
            orgs: data
        };
        //console.log(hbsObject2);
        res.render("orgs", hbsObject2);
    });
});
//GET THE ABOVE WORKING FIRST


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


router.post("/api/orgs", function(req, res) {
    orgs.create([
        "org_name",
        "org_activity",
        "org_url",
        "org_date",
        "org_time",
        "org_hours",
        "org_vols"
    ], [
      req.body.name, 
      req.body.web , 
      req.body.activity,
      req.body.date, 
      req.body.time,
      req.body.vol,
      req.body.hours
      
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
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