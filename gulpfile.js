var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer-core');
//var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');


//gulp.task('sass', function() {
//  gulp.src('sass/**/*.scss')
//   .pipe(sass().on('error', sass.logError))
//    .pipe(autoprefixer('last 3 version'))
//   .pipe(gulp.dest('./css/'))
//    .pipe(connect.reload());    
//});


gulp.task('styles', function() {

  var processors = [
    autoprefixer({ browsers: ['last 1 versions'] }),
    csswring
  ];

  return gulp.src('./css/src/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css/dist'));
});

gulp.task('serve', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('css/src/*.css', ['styles']);
});

gulp.task('default', ['styles', 'serve', 'watch']);