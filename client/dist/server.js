const express = require("express");
const app = express();
var path = require("path");
app.use(express.static(path.join(__dirname + "/src")));

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "/src/index.html"));
});
app.listen(4200, function () {
	console.log("Example app listening on port 4200! :D");
});
