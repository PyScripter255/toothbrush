var assert = require("assert"),
request = require("supertest"),
toothbrush = require("../index");

describe("toothbrush", function(){
	it("should compile a template", function(done){
		function serve(req, res){
			toothbrush(__dirname+"/test.html", res, {"name": "Bob"});
		}
		request(serve)
		.get("/")
		.expect(200)
		.expect("Content-Type", "text/html")
		.expect("Hello Bob!", done);
	});
});
