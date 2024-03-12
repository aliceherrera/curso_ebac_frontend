const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imageMin = require('gulp-imagemin');

function comprimeJS(){
    return gulp.src('./src/scripts/*js')
        .pipe(obfuscate()) //comprimindo arquivo js
        .pipe(uglify()) //deixando arquivo ilegivel
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens(){
    return gulp.src('./src/imagens/*')
        .pipe(imageMin()) //comprimindo imagens
        .pipe(gulp.dest('./build/imagens'))
}

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })) //transformando em css comprimido
        .pipe(sourcemaps.write('./maps')) //mapa para localizar destino no arquivo scss
        .pipe(gulp.dest('./build/styles/'))
}

exports.default = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/imagens/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJS));
}