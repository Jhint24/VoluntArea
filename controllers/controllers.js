var express = require("express");
var router = express.Router();
//Import the model
var voluntareaModel = require("../models/voluntarea.js");

//create routes and set the logic
//org route to show all current orgs
router.get("/events", function(req, res)  {
    //3 of 3 cbs
    voluntareaModel.readOrgs(function(data)  {
        var hbsObject = {
            orgs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/organization", function(req, res)  {
    
    voluntareaModel.readOrgs(function(data)  {
        var hbsObject = {
            orgs: data
        };
        console.log(hbsObject);
        res.render("organization", hbsObject);
    });
});



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