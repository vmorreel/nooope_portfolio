var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('pack-js', function () {	
	return gulp.src(['assets/js/main.js', 'assets/js/jquery-3.2.0.min.js'])
	.pipe(concat('application.js'))
	.pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {	
	return gulp.src(['assets/css/main.css', 'assets/css/fonticon.css'])
	.pipe(concat('stylesheet.css'))
	.pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);