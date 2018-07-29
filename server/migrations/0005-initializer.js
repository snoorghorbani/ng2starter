var mongodb = require("mongodb");
const fs = require("fs");

exports.up = function(db, next) {
	var pets = db.collection("pets");
	pets.insert({ name: "tobi" }, next);
};

exports.down = function(db, next) {
	var pets = db.collection("pets");
	pets.findAndModify({ name: "tobi" }, [], {}, { remove: true }, next);
};
