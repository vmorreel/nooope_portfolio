var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {	
	return gulp.src(['assets/js/main.js', 'assets/js/jquery-3.2.0.min.js'])
	.pipe(concat('application.js'))
	.pipe(minify({
		ext:{
			min:'.js'
		},
		noSource: true
	}))
	.pipe(gulp.dest('build/js'));
});

gulp.task('pack-css', function () {	
	return gulp.src(['assets/css/main.css', 'assets/css/fonticon.css'])
	.pipe(concat('stylesheet.css'))
	.pipe(cleanCss())
	.pipe(gulp.dest('build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);