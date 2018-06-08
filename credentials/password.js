var bcrypt = require("bcrypt");


function generatePass(password) {
    saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
            console.error("Error in bcrypt.genSalt: " + err);
        }
        // auto-gen a salt and hash.
        bcrypt.hash(generatePass, salt, function (err, hash) {
            return hash;

            //let person continue with creating account
            if (err) {
                console.error("Error in bcrypt.hash: " + err);
            }
            console.log("the hashed password is: " + hash);
        });
    });
};