var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('build', function (callback) {
    runSequence('clean:dist',
      ['sass', 'min', 'fonts', 'library'],
      callback
    );
});

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
      callback
    );
});

gulp.task('sass', function () {
    gulp.src('App/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('App/Generate/Css'))
        .pipe(browserSync.reload({ stream: true }));
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

/* contruction */
gulp.task('clean:dist', function () {
    return del.sync('dist');
});

/*gulp.task('min:js', function () {
    return gulp.src('App/**//*.js')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('min:css', function () {
    return gulp.src('App/Generate/**//*.css')
      .pipe(useref())
      .pipe(gulpIf('*.css', cssnano()))
        .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('dist/css'));
});
*/

gulp.task('min', function () {
    gulp.src('App/**/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist/App'));
    gulp.src('App.js')
      .pipe(uglify())
     .pipe(gulp.dest('dist'));
    gulp.src('Route.js')
      .pipe(uglify())
     .pipe(gulp.dest('dist'));
    return gulp.src('index.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
     .pipe(gulp.dest('dist'));
});

gulp.task('library', function () {
    return gulp.src('Library/*')
      .pipe(gulp.dest('dist/Library'));
});

gulp.task('fonts', function () {
    return gulp.src('fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

// doesn't work
gulp.task('images', function () {
    return gulp.src('assets/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

