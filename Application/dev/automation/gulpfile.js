var gulp = require("gulp");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var htmlmin = require("gulp-htmlmin");
var nano = require("gulp-cssnano");
var prettify = require("gulp-prettify");
var initMessage = "Master gulp initiated at " + new Date();

var commonSeparator = function () {
	console.log('------------------------------------------------------');
};

var JOB = {

	production : {},

	musicmachine : {
		cssbuild : 'musicmachine-cssbuild',
		jsoperations : 'musicmachine-jsoperations',
		htmlbuild : 'musicmachine-htmlbuild'
	},

	webapp : {
		cssbuild : 'webapp-cssbuild',
		jsoperations : 'webapp-jsoperations',
		htmlbuild : 'webapp-htmlbuild'
	},

	notation : {}

};

/*Task definitions:Started.............................................*/

gulp.task(JOB.musicmachine.cssbuild, function () {
	commonSeparator();
	console.log('Musicmachine CSS building started...');
	gulp.src(['../musicmachine/dev/less/*.less'])
	.pipe(less({}))
	.pipe(nano())
	.pipe(gulp.dest('../musicmachine/prod/css/'));

});

gulp.task(JOB.musicmachine.jsoperations, function () {
	commonSeparator();
	console.log('Musicmachine JS building started...');
	gulp.src(['../musicmachine/dev/js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter())
	.pipe(concat('musicmachine.js'))
	.pipe(uglify({}))
	.pipe(gulp.dest('../musicmachine/prod/js/'))

});

gulp.task(JOB.musicmachine.htmlbuild, function () {
	commonSeparator();
	console.log('Musicmachine HTML building started...');
	gulp.src(['../musicmachine/dev/*.html'])
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('../musicmachine/prod/'))

});

gulp.task('default', [JOB.musicmachine.cssbuild,JOB.musicmachine.jsoperations,JOB.musicmachine.htmlbuild]);

console.log(initMessage);