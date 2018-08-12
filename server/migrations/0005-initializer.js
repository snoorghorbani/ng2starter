var mongodb = require("mongodb");
const fs = require("fs");


exports.up = function(db, next) {
	var pets = db.collection(${collctionName});
	pets.insert({ name: "tobi" }, next);
};

exports.down = function(db, next) {
	var pets = db.collection(${collctionName});
	pets.insertMany(${docs}, {}, { remove: true }, next);
};