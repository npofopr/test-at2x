'use strict';

var gulp = require('gulp'),
	fs = require('fs'),
	//begin postcss
	postcss = require('gulp-postcss'),
	at2x = require('postcss-at2x');
	//end postcss

gulp.task('style', function () {
	var processors = [
		at2x()
	];
	gulp.src('src/style/style.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('build/style/'));
});

gulp.task('build', ['style']);
