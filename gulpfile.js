let gulp = require('gulp'),
concat = require('gulp-concat'),
babel = require('gulp-babel');

let libs = [
'src/node_modules/core-js/client/shim.min.js',
'src/node_modules/zone.js/dist/zone.min.js',
'src/node_modules/rxjs/bundles/Rx.min.js',
'src/node_modules/@angular/core/bundles/core.umd.min.js',
'src/node_modules/@angular/common/bundles/common.umd.min.js',
'src/node_modules/@angular/compiler/bundles/compiler.umd.min.js',
'src/node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
'src/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
'src/app/*.js'
];

gulp.task('babel', function() {
	gulp.src(libs)
	.pipe(concat('all.js'))
	.pipe(babel({
		presets: ['es2016'],
		minified: true}))
	.pipe(gulp.dest('web/'));
})

gulp.task('html', function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('web/'));
})
gulp.task('start', ['babel', 'html']);