var gulp = require('gulp');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');
var shell = require('gulp-shell')

gulp.task('default', ['browser-sync', 'cors'], function() {

})

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /app/index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['reload']);
    gulp.watch(['./app/*.css'], ['reload']);
    gulp.watch(['./app/*.js'], ['reload']);
});

gulp.task('cors', shell.task([
    'corsproxy'
]))

gulp.task('reload', function () {
    webserver.reload();
});
