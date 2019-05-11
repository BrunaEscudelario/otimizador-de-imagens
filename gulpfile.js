const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


var imgsFiles = "src/imagens/*";
var imgsDist = 'dist/imagens';


//task para comprimir as imagens
gulp.task('imagem', function() {
    return gulp.src(imgsFiles)
        .pipe(imagemin())
        .pipe(gulp.dest(imgsDist))
});
//task para o watch
gulp.task('watch', function () {
    gulp.watch(imgsFiles, ['imagem']);
   
});
//task default 
gulp.task('default', ['imagem']);
