var gulp = require("gulp");

gulp.task("pack", () => {
    console.log("original pack task called");
    return Promise.resolve();
});
