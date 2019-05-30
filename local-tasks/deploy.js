var gulp = require("gulp");

gulp.task("deploy", gulp.series("pack"), () => {
    console.log("deploy task called");
    return Promise.resolve();
});
