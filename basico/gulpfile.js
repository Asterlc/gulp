const { parallel } = require('gulp');
const gulp = require('gulp');
const series = gulp.series

const copy = (callback) => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.src('pastaA/**/*.txt') copia todos os arquivos de extensão txt presentes na pastaA
        .pipe(gulp.dest('pastaC'))


    console.log('Task Copied to Folder B');
    return callback();
};

const task1 = (callback) => {
    console.log('task1');
    return callback();
}
const task2 = (callback) => {
    console.log('task2');
    return callback();
}
const task3 = (callback) => {
    console.log('task3');
    return callback();
}
const task4 = (callback) => {
    console.log('task4');
    return callback();
}

exports.default = series(
    copy,
    task1,
    task3,
    task2,
    task4
);

// exports.default = series(
//  parallel(   copy,
//     task1,
//     task3,
//     task2,
//     task4)
//     ); Inicia mais de uma tarafa passada como params para parallel();