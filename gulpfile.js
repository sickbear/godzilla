'use strict';
 
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      importCss = require('gulp-import-css');

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(importCss())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});