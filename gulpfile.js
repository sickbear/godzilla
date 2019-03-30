'use strict';
 
const gulp = require('gulp'),
      concat = require('gulp-concat'),
      browserSync = require("browser-sync").create(),
      sass = require('gulp-sass'),
      importCss = require('gulp-import-css'),
      cleanCss = require('gulp-clean-css'),
      prefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify'),
      image = require('gulp-image'),
      del = require('del'),
      reload = browserSync.reload;

const path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/images/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/styles/style.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/styles/style.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
}

function html() {
    return gulp.src(path.src.html)
            .pipe(gulp.dest(path.build.html))
            .pipe(reload({stream: true}));
}

function js() {
    return gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
}

function style() {
    return gulp.src(path.src.style)
        .pipe(importCss())
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(prefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
}

function images() {
    return gulp.src(path.src.img)
        .pipe(image())
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
}

function clean() {
    return del(['dist/*']);
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.style, style);
    gulp.watch(path.watch.img, images);
    gulp.watch(path.watch.fonts, fonts);
}

gulp.task('html', html);
gulp.task('js', js);
gulp.task('style', style);
gulp.task('images', images);
gulp.task('fonts', fonts);
gulp.task('watch', watch);

gulp.task(
    'build', 
    gulp.series(clean,
        gulp.parallel(
            html,
            js,
            style,
            images,
            fonts
        )
    )
)

