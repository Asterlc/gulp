const gulp = require('gulp');
const series = gulp.series;
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const scss = require('gulp-sass')(require('sass'));
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const appHTML = (callback) => {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: false }))
        .pipe(gulp.dest('build'))

    return callback();
}

const appCSS = (callback) => {
    gulp.src('src/assets/sass/index.scss')
        .pipe(scss())
        .pipe(uglifyCSS())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))

    return callback();
}

const appJS = (callback) => {
    gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))

    return callback();
}

const appIMG = (callback) => {
    gulp.src('src/assets/imgs/logo.png')
        .pipe(gulp.dest('build/assets/imgs'))

    return callback();
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = { appHTML, appCSS, appIMG, appJS }