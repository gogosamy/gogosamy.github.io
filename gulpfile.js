var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
 
gulp.task('compressimage', () =>
    gulp.src('*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
);
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default'), function(){
    gulp.run('minify','minify-css','compressimage')
}