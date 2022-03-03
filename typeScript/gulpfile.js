const gulp = require('gulp');
const series = gulp.series;
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
//minimal pipes config
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const dataTS = () => {
    console.log('transpilando para javascript');
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

const tsMinimal = () => {
    console.log('transpilando para javascript --minimal');
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) //Deixa cada arquivo convertido em uma unica linha.
        .pipe(concat('code.min.js')) // junta todos os arquivos convertido em um unico arquivo com o nome especificado.
        .pipe(gulp.dest('build-minimal'))
}

exports.default = series(dataTS, tsMinimal);