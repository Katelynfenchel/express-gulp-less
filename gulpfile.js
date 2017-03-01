var gulp = require('gulp');
var less= require('gulp-less');
var watch= require('gulp-watch');


//watch task listen for the save on a specific file then runs, the task you want//
gulp.task('watch', function(){
	//first arg is the array of files to watch, second arg is an array of tasks to run
	//* is telling gulp to watch every file in the folder with an extension of .less
	gulp.watch(['./styles/*.less'],['compile-less'])
})



gulp.task('whatever', function(){
	console.log('the whatever task is running biotch')
})

gulp.task('compile-less', function(){
	//where is the file we want to convert
	gulp.src('./styles/style.less')
	//put in the "tube" and calling the less command and it converts the less to css
	.pipe(less())
	//now we want to pipe it to send it to the css file now that it is converted 
	.pipe(gulp.dest('./styles/'))
})


//default task must use default, default name, second arg is an array of tasks to be run
gulp.task('default', ['compile-less' , 'whatever', 'watch']) 
