var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup', 'styles', 'vendor', 'assets']);
