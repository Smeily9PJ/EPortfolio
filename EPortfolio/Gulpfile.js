var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('sass', function () {
    gulp.src('App/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('App/Generate/Css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        proxy: 'localhost:64410'
    });
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('App/**/*.scss', ['sass']);
    // Other watchers
    gulp.watch('App/**/*.html', browserSync.reload);
    gulp.watch('App/**/*.js', browserSync.reload);
    gulp.watch('Library/*.css', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('App.js', browserSync.reload);
    gulp.watch('Route.js', browserSync.reload);
});