const gulp = require('gulp');
const concat = require('gulp-concat');
const uglifyCSS = require('gulp-uglifycss');
const series = gulp.series;
const parallel = gulp.parallel
const scss = require('gulp-sass');
// const { parallel } = require('gulp');

const toCSS = () => {
    console.log('transpilando para CSS')
    return gulp.src('src/sass/index.scss')
        .pipe(scss())
        .pipe(gulp.dest('build/css'))
}

const minimalCSS = () => {
    console.log('transpilando para CSS --minimal')
    return gulp.src('src/sass/index.scss')
        .pipe(scss())
        .pipe(uglifyCSS())
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

const copyHTML = () => {
    console.log('Copiando arquivo HTML')
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(parallel(toCSS, minimalCSS, copyHTML))