const { src, dest, watch } = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) ); 


function css( donde ) {

    src('src/scss/app.scss')            // Identificar el archivo .scss a compilar
        .pipe( sass() )                 // Compilarlo
        .pipe( dest( 'build/css' ) )    // Almacenarla en el disco duro

    donde();
}

function dev( donde ) { 
    
    watch( 'src/scss/app.scss', css );

    donde();
}

exports.compilandoCSS = css;
exports.escucharCambios = dev;