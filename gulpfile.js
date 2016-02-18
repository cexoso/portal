var gulp = require('gulp'),
  connect = require('gulp-connect'),
   jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
gulp.task('server', function() {
  browserSync.init({
    server:{
      baseDir: ['app','bower_components']
    }
  });
  gulp.watch("app/styles/*.css",function(d){
    console.log(d);
    return gulp.src(d.path)
      .pipe(browserSync.stream());
  });

});

gulp.task('default', ['server']);
