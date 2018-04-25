var gulp = require("gulp");
var gulpCopy = require("gulp-copy");
var path = require("path");
var streamfilter = require("streamfilter");

var srcProductionPaths = [ "./src/build.js", "./src/index.html", "./src/favicon.png" ];
var distProductionPath = "../CustomerCare/production";

const copy_file_after_installed = [
	"./.vscode/**/*",
	"./configs/**/*",
	"./db/**/*",
	"./platforms/**/*",
	"./scripts/**/*",
	"./server/**/*",
	"./src/**/*",
	"./tslint.json",
	"./tslint.server.json",
	"./tslint.json",
	"./tsconfig-aot.json",
	"./tsconfig.server.json",
	"./tsconfig.json",
	"./README.md",
	"./karma.conf.js",
	"./.gitignore",
	"./.env",
	"./.angular-cli.json"
];

var fs = require("fs");
const filter = function(options) {
	//console.log('***********************************AMS')
	options = options || {};
	var history = {};
	const srcExists = fs.existsSync("../../../src");
	return streamfilter(
		function(file, enc, cb) {
			if (file.base.includes("src") && srcExists) {
				cb(true);
			} else {
				cb(false);
			}
		},
		{
			objectMode  : true,
			passthrough : options.passthough !== false,
			restore     : options.restore
		}
	);
};

gulp.task("production", [], function() {
	gulp.src(srcProductionPaths).pipe(gulpCopy(distProductionPath)).pipe(gulp.dest(distProductionPath));
});

gulp.task("copy_file_after_installed", [], function() {
	gulp.src(copy_file_after_installed).pipe(filter()).pipe(gulpCopy("../../..")).pipe(gulp.dest("."));
});
