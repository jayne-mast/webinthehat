var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');


gulp.task('css', function(){
    gulp.src(['css/**/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./'))
});

gulp.task('default', function(){
    gulp.watch("css/**/*.scss", ['css']);
});