const assert = require("chai").assert;
const server = require("../server.js");

describe("Server", function(){
  it("App now listening at localhost:3000", function() {
    assert.equal(server(), "App now listening at localhost:3000");
  });
});
