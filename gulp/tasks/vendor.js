var gulp = require('gulp');

gulp.task('vendor', function() {
  return gulp.src(['./src/vendor/*.css', './src/vendor/*.js'])
    .pipe(gulp.dest('./build/'));
});
