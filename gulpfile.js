const { src, dest, watch } = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) ); 
const plumber = require( 'gulp-plumber' );

function css( donde ) {

    src('src/scss/**/*.scss')            // Identificar el archivo .scss a compilar
        .pipe( plumber() )              // Plumber evita que se detenga el workflow cuando se encuentra un error
        .pipe( sass() )                 // Compilarlo
        .pipe( dest( 'build/css' ) )    // Almacenarla en el disco duro

    donde();
}

function dev( donde ) { 
    
    watch( 'src/scss/**/*.scss', css );

    donde();
}

exports.compilandoCSS = css;
exports.escucharCambios = dev;