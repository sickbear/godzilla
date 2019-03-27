'use strict';
 
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      importCss = require('gulp-import-css'),
      image = require('gulp-image');

gulp.task('html', function() {
    return (
        gulp.src('./src/*.html')
            .pipe(gulp.dest('./dist'))
    )
})

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(importCss())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('image', function() {
    gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('default', gulp.series('html', 'image'));

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});