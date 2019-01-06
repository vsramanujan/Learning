var gulp = require('gulp');
var gulp_sass = require('gulp-sass');

gulp.task('sass', function (done) {
  gulp.src('./sass-project/scss/*.scss')
    .pipe(gulp_sass())
    .pipe(gulp.dest('./sass-project/css'))
    done();
});

gulp.task('default',gulp.series('sass', function(done) {
  gulp.watch('./sass-project/scss/*.scss',gulp.series('sass'));
  done();
}))