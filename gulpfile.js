var gulp = require("gulp");
var gulpCopy = require('gulp-copy');
var srcProductionPaths = ['./src/build.js', './src/index.html', './src/favicon.png']
var distProductionPath = '../CustomerCare/production';
//var typedoc = require("gulp-typedoc");

// gulp.task("typedoc", function () {
//     var srcTSFiles = ["./src/**/*.ts"];
//     var srcProductionFiles = ["./src/assets"];

//     return gulp
//         .src(srcTSFiles)
//         .pipe(typedoc({
//             // TypeScript options (see typescript docs) 
//             module: "commonjs",
//             target: "ES5",
//             includeDeclarations: true,
//             emitDecoratorMetadata: true,
//             experimentalDecorators: true,

//             // Output options (see typedoc docs) 
//             out: "documentation",
//             json: "documentation.json",

//             // TypeDoc options (see typedoc docs) 
//             name: "my angular",
//             version: true,
//             noLib: true
//         }));
// });

gulp.task("production", [], function () {
    var streem = gulp.src(srcProductionPaths)
        .pipe(gulpCopy(distProductionPath))
        .pipe(gulp.dest(distProductionPath));
    return streem;
});