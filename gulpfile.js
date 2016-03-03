var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['webserver'], function() {

})

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: 'http://localhost:8000/app/index.html'
    }));
});
