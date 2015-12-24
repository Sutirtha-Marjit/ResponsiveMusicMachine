var gulp = require("gulp");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var htmlmin = require("gulp-htmlmin");

gulp.task('cssbuild',function(){
   var source = gulp.src(['dev/less/*.less']);
    source.pipe(less({}))
    .pipe(gulp.dest('prod/musicmachine/css/'));    
    
});

gulp.task('jsoperations',function(){    
    var source = gulp.src(['dev/js/*.js']); 
    source.pipe(jshint())  
    //.pipe(jshint.reporter('YOUR_REPORTER_HERE'))    
    .pipe(concat('musicmachine.js'))
    .pipe(uglify({}))
    .pipe(gulp.dest('prod/musicmachine/js/'))
    
});

gulp.task('htmlbuild',function(){
    var source = gulp.src(['dev/*.html']);
    
    source.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('prod/musicmachine/'));
    
});


gulp.task('default', function() {
    gulp.run(['jsoperations','htmlbuild','cssbuild']);
    
});

console.log('Gulp actions are initiated');