var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var modRewrite  = require('connect-modrewrite');
var shell = require('gulp-shell')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rimraf = require('gulp-rimraf');
var watch = require('gulp-watch');
var templateCache = require('gulp-angular-templatecache');

gulp.task('clean', function() {
    return gulp.src('.tmp', { read: false })
        .pipe(rimraf({ force: true }));
});

gulp.task('default', [ 'watch', 'build', 'browser-sync', 'cors'], function() {

})

gulp.task('templates', function () {
    var TEMPLATE_HEADER = 'angular.module("webApp").run(["$templateCache", function($templateCache) {';

    return gulp.src('**/*.tpl.html')
        .pipe(templateCache({
            templateHeader: TEMPLATE_HEADER,
            base: '',
            transformUrl: function(url) {
                return url.split("\\").pop(-1)
            }
        }))
        .pipe(gulp.dest('./app/templatesCache'));
});

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
        //.pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('.tmp'))
    .pipe(browserSync.reload({ stream:true }));
});

// Static server
gulp.task('build', ['templates','js' ], function() {

})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ".tmp"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['js', browserSync.reload]);
    gulp.watch(['./app/*.tpl.html'], ['templates', browserSync.reload]);
    gulp.watch(['./app/*.css'], [browserSync.reload]);
    return gulp.watch(['./app/*.js'], ['js', browserSync.reload ]);
});

gulp.task('cors', shell.task([
    'corsproxy'
]))

gulp.task('reload', function () {
    reload({stream: true});
});
