var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var TEST_PATH = 'test/*_test.js';

// JSHint Task
gulp.task('jshint', function() {
  return gulp.src('lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('unit-test', ['jshint'], function() {
  return gulp.src([TEST_PATH], {read: false})
    .pipe(mocha({reporter: 'list'})).on('error', gutil.log);
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('lib/*.js', ['jshint', 'scripts', 'unit-test']);
});

// Default Task
gulp.task('default', ['jshint', 'scripts', 'watch']);

gulp.task('hook', function () {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {force: true}));
});
