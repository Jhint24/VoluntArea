var expect = require("chai").expect;
var voluntarea = require("../models/voluntarea.js");

describe("A function that creates an organization", function() {

  it("Should create an organizations", function(done) {
      var userName = {
        username: "firstorg",
      };

      voluntareaModel.createOrgs(user, (err, user)=>{
        expect(err).to.be.null;
      
        expect(user).to.exist;
        expect(user).to.be.an("object");
      
        expect(user.id).to.ok;
        expect(user.id).to.be.a("number");
        expect(user.id).to.be.gte(0);

        expect(username).to.exist;
        expect(username).to.be.a("string");
        expect(username).to.be.equal("firstorg");
      
        done();
      });

  });

});
