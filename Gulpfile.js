'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),    
    concat = require('gulp-concat'),    
    minify = require('gulp-js-minify'),  
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel'),

    filesJS = [        
        'src/app/controlpanel.module.js',
        'src/app/controlpanel.controller.js',
        'src/app/controlpanel.config.js',  
        'src/modules/**/*.js', 
        'src/modules/**/**/*.js',
        'src/modules/**/**/**/*.js',
        'src/components/**/*js',             
        'src/utils/**/*.js'
    ],

    filesCSS = [
        'src/app/controlpanel.scss',
        'src/modules/**/*.scss',
        'src/components/**/*.scss'
    ];

gulp.task('dev', [
    'devJS',
    'devCSS',
    'watch'
], bSync => {
    browserSync.init({
        server: './src'
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('devJS', function () {
    return gulp.src(filesJS)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('main.min.js'))        
        .pipe(gulp.dest('./src/assets/js/'))
        .pipe(browserSync.stream());
});

gulp.task('devCSS', function () {
    return gulp.src(filesCSS)
        .pipe(concat('main.min.css'))
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(filesJS, ['devJS']);
    gulp.watch(filesCSS, ['devCSS']);
});
