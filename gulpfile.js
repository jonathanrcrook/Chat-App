const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('public/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/scss/main.scss', ['sass']);
});
