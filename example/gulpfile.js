var gulp = require('gulp');
var ejs = require('gulp-ejs-compile-commonjs')

gulp.task('default', function () {
    gulp.src('src/*.ejs')
        .pipe(ejs('tmpl.js'))
        .pipe(gulp.dest('dest'));
})