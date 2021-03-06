var gulp = require("gulp");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var htmlmin = require("gulp-htmlmin");
var nano = require("gulp-cssnano");
var prettify = require('gulp-prettify');



gulp.task('cssbuild',function(){
   var source = gulp.src(['dev/less/*.less']);
    source.pipe(less({}))
    .pipe(nano())
    .pipe(gulp.dest('prod/musicmachine/css/'));    
    
});

gulp.task('jsoperations',function(){    
    var source = gulp.src(['dev/js/*.js']);        
    source.pipe(jshint())  
    .pipe(jshint.reporter())
    .pipe(concat('musicmachine.js'))
    .pipe(uglify({}))
    .pipe(gulp.dest('prod/musicmachine/js/'));   
});

gulp.task('htmlbuild',function(){
    var source = gulp.src(['dev/*.html']);    
    source.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('prod/musicmachine/'));
    
});


gulp.task('default', ['jsoperations','htmlbuild','cssbuild']);

console.log('Gulp actions are initiated');