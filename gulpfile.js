var gulp = require('gulp'),
    concat = require('gulp-concat');

var jsSources = [
    'components/scripts/a.js',
    'components/scripts/fr-hard-currying.js'
];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('fp_patterns.js'))
        .pipe(gulp.dest('builds/development/js'))
});