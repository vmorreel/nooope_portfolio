var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('pack-js', function () {	
	return gulp.src(['assets/js/jquery-3.2.0.min.js', 'assets/js/main.js'])
	.pipe(concat('application.js'))
	.pipe(minify({
		ext:{
			min:'.js'
		},
		noSource: true
	}))
	.pipe(rev())
	.pipe(gulp.dest('build/js'))
	.pipe(rev.manifest('build/rev-manifest.json', {
		merge: true
	}))
	.pipe(gulp.dest(''));
});

gulp.task('pack-css', function () {	
	return gulp.src(['assets/css/fonticon.css', 'assets/css/main.css'])
	.pipe(concat('stylesheet.css'))
	.pipe(cleanCss())
	.pipe(rev())
	.pipe(gulp.dest('build/css'))
	.pipe(rev.manifest('build/rev-manifest.json', {
		merge: true
	}))
	.pipe(gulp.dest(''));
});

gulp.task('default', ['pack-js', 'pack-css']);