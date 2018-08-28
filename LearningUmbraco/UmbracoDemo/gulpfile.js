var gulp = require('gulp');

// loads gulp plugins automatically from package.json - plugins need to be prefixed with "plugins"
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

// browser sync is not a plugin so needs to be used like this
var browserSync = require('browser-sync');
var reload = browserSync.reload; // browserSync specific variable
var source = require('vinyl-source-stream');
var webpackStream  = require('webpack-stream');
var webpack  = require('webpack');
var fs = require('fs');

// post css
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var src = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*',
    bootstrap: 'src/js/app/app.js',
    images: 'src/images/*',
    fonts: 'src/fonts/**/*.{eot,svg,ttf,woff,woff2}'
};

var dist = {
    css: 'dist/css/',
    js: 'dist/js/',
    images: 'dist/images/',
    fonts: 'dist/fonts/'
}

var views = {
    cshtml: '../Views/{,*/}*.cshtml'
}


gulp.task('js', function() {
    return gulp.src(src.bootstrap)
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .on('error', function(e) {
      plugins.util.log(e);
    })
    .pipe(gulp.dest(dist.js))
    .pipe(browserSync.stream());   
});

gulp.task('js-minify', function() {
    return gulp.src(src.bootstrap)
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .on('error', function(e) {
      plugins.util.log(e);
    })
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dist.js))
});

// Image minification
gulp.task('image-min', function() {
    return gulp.src(src.images)
    .pipe(plugins.imagemin({
      progressive: true,
      interlaced: true,
      pngquant: true
     }))
    .pipe(gulp.dest(dist.images))
});

// move fonts to dist folder
gulp.task('fonts', function() {
    return gulp.src([src.fonts])
        .pipe(gulp.dest(dist.fonts));
});

// Static Server + watching scss/html/js files
gulp.task('serve-html', ['css'], function() {
    browserSync.init({
        startPath:'./dist/html',
        server:{
            baseDir: './'
        }
    });
    gulp.watch(src.js, ['js']);
    gulp.watch(src.scss, ['css']);
    gulp.watch(src.images, ['image-min']);
    gulp.watch(src.fonts, ['fonts']);
    gulp.watch(['/src/html/data.json', 'src/html/templates/**/*', 'src/html/pages/**/*', 'src/html/*'], ['nunjucks']);
});


gulp.task('serve', ['css'], function () {
    gulp.watch(src.js, ['js']);
    gulp.watch(src.scss, ['css']);
    gulp.watch(src.images, ['image-min']);
    gulp.watch(src.fonts, ['fonts']);
});

gulp.task('css', function() {
    var processors = [
       autoprefixer
   ];
    return gulp.src(src.scss)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
          includePaths: ['./node_modules/susy/sass', './node_modules/breakpoint-sass/stylesheets/', ]
        }).on('error', plugins.sass.logError))
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.postcss(processors))
        .pipe(gulp.dest(dist.css))
        .pipe(browserSync.stream());
});

gulp.task('css-release', function() {
   var releaseProcessors = [
       autoprefixer,
       cssnano
   ];
    return gulp.src(src.scss)
        .pipe(plugins.sass({
            includePaths: ['./node_modules/susy/sass', './node_modules/breakpoint-sass/stylesheets/']
        }).on('error', plugins.sass.logError))
        .pipe(plugins.postcss(releaseProcessors))
        .pipe(gulp.dest(dist.css))
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/html/pages/**/*.+(html|nunjucks)')
    // Adding data to Nunjucks
    .pipe(plugins.data(function() {
        return require('./src/html/data.json')
    }))
    .pipe(plugins.data(function(file) {
        return JSON.parse(fs.readFileSync('./src/html/data.json'));
     }))
  // Renders template with nunjucks
  .pipe(plugins.nunjucksRender({
      path: ['src/html/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('dist/html'))
  .pipe(browserSync.stream());
});

gulp.task('html', ['serve-html', 'nunjucks', 'fonts', 'image-min', 'js']);

gulp.task('default', ['serve', 'fonts', 'image-min', 'js']);

gulp.task('Debug', ['css', 'fonts', 'image-min', 'js-minify']);

gulp.task('Release', ['css-release', 'fonts', 'image-min', 'js-minify']);
