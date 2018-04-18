var gulp   = require('gulp'       );
var concat = require('gulp-concat');

gulp.task('js', function(){
    return gulp.src('src/js/*.js')
            .pipe(concat('main.min.js'))
            .pipe(gulp.dest('app/js'));
});

gulp.task('default', ['js']);