var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var tinypng = require('gulp-tinypng');

gulp.task('html:build', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('../build/'))
});

gulp.task('fonts:build', function() {
    gulp.src('fonts/**/*.*')
        .pipe(gulp.dest('../build/fonts/'))
});

gulp.task('fonts:image', function() {
    gulp.src('img/*.*')
        .pipe(gulp.dest('../build/img/'))
});

gulp.task('sass', function () {
  return gulp.src('styles/partials/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/partials/'));
});
 
 
gulp.task('scripts', function() {
  return gulp.src(['js/partials/script.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('tinypng', function () {
    gulp.src('img/*.{png,jpg,jpeg}')
        .pipe(tinypng('78U-Wt2sBNuV1ifTlN8I06NRFPBQ9oCe'))
        .pipe(gulp.dest('../build/img/'));
});

gulp.task('plagins', function() {
  return gulp.src(['js/partials/jquery1.9.1.min.js',
                   'js/partials/jcarousel.js',
                   'js/partials/template.js',
                   'js/partials/isotope.pkgd.min.js',
                   'js/partials/jquery.xdomainrequest.js',
                   'js/partials/EventHelpers.js',
                   'js/partials/cssQuery-p.js',
                   'js/partials/sylvester.js',
                   'js/partials/cssSandpaper.js'])
    .pipe(concat('plagins.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('style', ['sass'], function () {
  return gulp.src(['styles/partials/reset.css',
                   'styles/partials/font.css',
                   'styles/partials/*.css'])
    .pipe(concatCss('style.main.css'))
    .pipe(gulp.dest('styles/'));
});

gulp.task('compress__scripts', ['scripts'], function() {
  return gulp.src('js/script.main.js')
    .pipe(uglify())
    .pipe(concat('script.main.min'))
    .pipe(gulp.dest('../build/js/'));
});

gulp.task('compress__plagins', ['plagins'], function() {
  return gulp.src('js/plagins.js')
    .pipe(uglify())
    .pipe(concat('plagins.min'))
    .pipe(gulp.dest('../build/js/'));
});

gulp.task('compress__css', ['style'], function () {
  gulp.src('styles/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.main.min.css'))
    .pipe(gulp.dest('../build/styles'));
});

gulp.task('watch', function () {
  gulp.watch('styles/partials/*.scss', ['sass', 'style', 'compress__css']);
  gulp.watch('js/partials/script.js', ['scripts', 'compress__scripts']);
});

gulp.task('default', 
        ['html:build',
         'fonts:build',
         'fonts:image',
         'sass',
         'style',
         'plagins',
         'scripts',      
         'compress__plagins',
         'compress__scripts',
         'compress__css'
         ], function () {  

});



 


