var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['webserver'], function() {

})

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
