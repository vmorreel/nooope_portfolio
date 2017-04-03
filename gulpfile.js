var gulp = require('gulp'),
concat = require('gulp-concat'),
minify = require('gulp-minify'),
cleanCss = require('gulp-clean-css'),
rev = require('gulp-rev'),
del = require('del');

gulp.task('pack-js', ['clean-js'], function () {	
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

gulp.task('pack-css', ['clean-css'], function () {	
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

gulp.task('clean-js', function () {
	return del([
		'build/js/*.js'
		]);
});

gulp.task('clean-css', function () {
	return del([
		'build/css/*.css'
		]);
});

gulp.task('watch', function() {
	gulp.watch('assets/js/**/*.js', ['pack-js']);
	gulp.watch('assets/css/**/*.css', ['pack-css']);
});

gulp.task('default', ['watch']);