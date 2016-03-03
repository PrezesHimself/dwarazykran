var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['webserver'], function() {

})

gulp.task('webserver', function() {
  gulp.src(['app', 'node_modules', 'components'])
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['reload']);
    gulp.watch(['./app/*.js'], ['reload']);
});

gulp.task('reload', function () {
    webserver.reload();
});
