const gulp = require('gulp');
const { series, parallel } = require('gulp');
const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { toMonitor, server } = require('./gulpTasks/server');

exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts )
    ),
    server,
    toMonitor
)