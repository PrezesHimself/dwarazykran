var gulp = require('gulp');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');
var shell = require('gulp-shell')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
    return gulp.src('dist', { read: false })
        .pipe(rimraf({ force: true }));
});

gulp.task('default', ['build', 'browser-sync', 'cors'], function() {

})

gulp.task('dist', ['clean'], function() {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
})

gulp.task('js', function() {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('.tmp'));
});

// Static server
gulp.task('build', ['js'], function() {

})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ".tmp",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['reload']);
    gulp.watch(['./app/*.css'], ['reload']);
    gulp.watch(['./app/*.js'], ['js', 'reload' ]);
});

gulp.task('cors', shell.task([
    'corsproxy'
]))

gulp.task('reload', function () {
    webserver.reload();
});
