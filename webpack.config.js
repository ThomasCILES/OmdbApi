const Encore = require('@symfony/webpack-encore');
const path   = require('path');

const paths  = {
    js:     path.resolve(__dirname, './src/js'),
    sass:   path.resolve(__dirname, './src/sass'),
    output: path.resolve(__dirname, './build'),
    public: '/build'
};

Encore
    // directory where all compiled assets will be stored
    .setOutputPath(paths.output)

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath(paths.public)

    // empty the outputPath dir before each build
    // .cleanupOutputBeforeBuild()

    // will output as web/build/app.js
    .addEntry('app', path.resolve(paths.js, './app.js'))

    // will output as web/build/global.css
    .addStyleEntry('style', path.resolve(paths.sass, './style.scss'))

    // allow sass/scss files to be processed
    .enableSassLoader()
    .enablePostCssLoader()

    .enableVueLoader()

    // allow legacy applications to use $/jQuery as a global variable
    //.autoProvidejQuery()
    .enableSourceMaps(false)

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(false)
;

// export the final configuration
module.exports = Encore.getWebpackConfig();