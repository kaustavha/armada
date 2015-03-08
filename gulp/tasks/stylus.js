var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').stylus;

gulp.task('stylus', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .on('error', handleErrors)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
