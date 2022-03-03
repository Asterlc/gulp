const gulp = require('gulp');
const series = gulp.series;
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


const main = (callback) => {
    console.log('Starting minification')
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

exports.default = series(main)