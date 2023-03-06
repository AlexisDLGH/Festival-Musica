const { src, dest , watch, parallel } = require("gulp");

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

function css (done) {
    src('src/scss/**/*.scss')// Identificar el archivo SASS con la funcion " src "
        .pipe(plumber())
        .pipe(sass())       // Compilarlo
        .pipe(dest("build/css"));   //Almacenar en el disco duro  con la funcion " dest "
    //


    done();  //Avisa al gulp cuando se llega al final
}

function versionWebp (done){

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')

        .pipe( webp(opciones) )
    
        .pipe( dest('build/img'));

    done();
}

function dev(done){
    watch('src/scss/**/*.scss',css);

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel (versionWebp,dev );