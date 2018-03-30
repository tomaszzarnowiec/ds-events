var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build:sass', function () {
  return gulp.src('./style/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('watch', function(){
    gulp.watch('./style/scss/**/*.scss', ['build:sass']);
});
