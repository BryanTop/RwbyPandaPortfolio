const chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;

var chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Unit Tests", () => {
  describe("Test Users endpoint", () => {
    it("Get Users", () => {
      chai
        .request("http://localhost:3000")
        .get("/users")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200, "It expects a status code of 200");
          expect(res.body.users).to.not.be.null;
          expect(res.body.users)
            .to.be.an("array")
            .that.length.gte(1, "Expected Users in users array");
        });
    });
  });
});
