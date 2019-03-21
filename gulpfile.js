require('dotenv').config()
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')
const baseDirJs = './client/js'
const baseDirCss = './client/css'

gulp.task('minify-css', () => {
    return gulp.src(baseDirCss + '/styles.css')
        .pipe(concat('index.css'))
        .pipe(cssnano({ 
            discardComments: { removeAll: true }
        }))
        .pipe(gulp.dest('./server/public/css'))
})

gulp.task('minify-js', () => {
    return gulp.src(`${baseDirJs}/*.js`)
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ["@babel/env"],
            plugins: ["@babel/transform-regenerator"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./server/public/js'))
})

if (process.env.NODE_ENV !== 'production') {
    gulp.watch(['./client/js/*.js'], gulp.series('minify-js'))
    gulp.watch(['./client/css/*.css'], gulp.series('minify-css'))
}