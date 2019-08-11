const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const jsdom = require('jsdom');
const fs = require('fs');
// import  {expect} from 'chai';


describe("Our first test", () => {
	it("should pass", () => {
		// expect(true, "should be true").to.equal(false);
		assert.equal(true, true, "should be true");
	});
});

describe("index.html", () => {
	before(function(done) {
		const index = fs.readFileSync("./src/index.html", "utf-8");
		jsdom.env(index, function(err, window) {
			global.window = window;
			global.document = window.document;
			done();
		})
	});

	it("Must contain the following", () => {
		const h1Element = window.document.querySelector("h1");
		assert.equal(h1Element.innerHTML, "Hello World!");
	});

	it("Must contain image tag", () => {
		const imageElement = window.document.querySelector("img");
		assert.isNotNull(imageElement, "Does not contain image");
	})
});
