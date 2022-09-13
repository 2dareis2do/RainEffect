var gulp = require('gulp'),
  fs = require('fs'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  uglify = require('gulp-uglify'),
  streamify = require('gulp-streamify'),
  babelify = require("babelify");
	gsap = require("gsap");
	glslify = require("glslify");

function compileJS(file){
  browserify('src/'+file+'.js',{debug:true})
    .transform(babelify)
    .transform('glslify')
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source(file+'.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('demo/js'));
}
gulp.task('default', ['js1', 'js1b', 'js2', 'js2b', 'js2c', 'js3'],function(){});
gulp.task('js1',function(){
  compileJS('index');
});
gulp.task('js1b', function () {
  compileJS('index1b');
});
gulp.task('js2',function(){
  compileJS('index2');
});
gulp.task('js2b', function () {
  compileJS('index2b');
});
gulp.task('js2c', function () {
  compileJS('index2c');
});
gulp.task('js3',function(){
  compileJS('index3');
});
