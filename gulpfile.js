// Instaciando os Módulos
var gulp     = require('gulp');
var gutil    = require('gulp-util');
var uglify   = require('gulp-uglify');
var watch    = require('gulp-watch');
var jshint   = require('gulp-shint');
var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var sass     = require('gulp-sass');

gulp.task('scripts', function() {
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('jshint', function(){ 
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './src/img/**/*',
      imgDst = './build/img';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running task...');
        gulp.run('scripts');
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'watch']);