var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  less = require('gulp-less'),
  gulpMerge = require('gulp-merge'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config');

gulp.task('styles', function() {
   gulp.src(config.styles.src)
    .pipe(stylus())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest));
});
