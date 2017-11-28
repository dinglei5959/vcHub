var gulp = require('gulp')
var webserver = require('gulp-webserver')
var gls = require('gulp-live-server')
gulp.task('serve', function () {
 // var server = gls.static() // equals to gls.static('public', 3000);
  var server = gls.static('test/unit/coverage/Icov-report', 8333)
  // var server = gls.static(['dist', '.tmp'])

  server.start()

  // use gulp.watch to trigger server actions(notify, start or stop)
  // gulp.watch(['static/**/*.css', 'static/**/*.html'], function (file) {
  //   server.notify.apply(server, [file])
  // })
})

gulp.task('webserver', function () {
  gulp.src('test/unit/coverage/lcov-report')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }))
})
