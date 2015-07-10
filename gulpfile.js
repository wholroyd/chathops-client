'use strict';

var gulp = require('gulp');
var bump = require('gulp-bump');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var filter = require('gulp-filter');
var inject = require('gulp-inject');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var template = require('gulp-template');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var del = require('del');
var fs = require('fs');
var join = require('path').join;
var runSequence = require('run-sequence');
var semver = require('semver');
var childProcess = require('child_process');
var express = require('express');
var serveStatic = require('serve-static');
var openResource = require('open');

var packageJson = require('./package.json');
var ng = require('./build/ng');

// --------------
// Configuration.

var spawn = childProcess.spawn;
var server;

var PATHS = {
    dist: 'dist',
    distClient: 'dist/client',
    distLib: 'dist/lib',
    lib: [
        'node_modules/traceur/bin/traceur-runtime.js',
        '!node_modules/systemjs/dist/*.src.js',
        'node_modules/systemjs/dist/*.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/rx/dist/rx.js'
    ],
    client: {
        ts: ['app/**/*.ts'],
        html: 'app/**/*.html',
        css: 'app/**/*.css',
        static: 'app/**/*.{svg,jpg,png,ico}'
    }
};

var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
});

var semverReleases = ['major', 'premajor', 'minor', 'preminor', 'patch',
    'prepatch', 'prerelease'];

var port = 8080;

// --------------
// Tasks.

gulp.task('clean', function (done) {
    del(PATH.dest.all, done);
});

gulp.task('angular2', function() {
    return ng.build(
        [
            '!node_modules/angular2/es6/prod/angular2_sfx.js',
            '!node_modules/angular2/es6/prod/angular2.api.js',
            '!node_modules/angular2/es6/prod/es5build.js',
            '!node_modules/angular2/es6/prod/src/debug/**/*',
            '!node_modules/angular2/es6/prod/src/mock/**/*',
            '!node_modules/angular2/es6/prod/src/test_lib/**/*',
            'node_modules/angular2/es6/prod/**/*.js'
        ],
        PATHS.distLib + '/angular2', {
            namespace: 'angular2',
            traceurOptions: {}
        }
    );
});

gulp.task('libs', ['tsd', 'angular2'], function() {
    return gulp
        .src(PATHS.lib)
        .pipe(gulp.dest(PATHS.distLib));
});

gulp.task('ts', function() {
    return gulp
        .src([].concat(PATHS.typings, PATHS.client.ts)) // instead of gulp.src(...), project.src() can be used
        .pipe(changed(PATHS.distClient, {
            extension: '.js'
        }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('html', function() {
    return gulp
        .src(PATHS.client.html)
        .pipe(changed(PATHS.distClient))
        .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('css', function() {
    return gulp
        .src(PATHS.client.css)
        .pipe(changed(PATHS.distClient, {
            extension: '.css'
        }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('static', function() {
    return gulp
        .src(PATHS.client.static)
        .pipe(changed(PATHS.distClient))
        .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('bundle', function(done) {
    runSequence('clean', 'libs', ['ts', 'html', 'css', 'static'], done);
});

registerBumpTasks();

gulp.task('bump.reset', function() {
    return gulp.src('package.json')
        .pipe(bump({ version: '0.0.0' }))
        .pipe(gulp.dest('./'));
});

gulp.task('server:restart', function(done) {
    var started = false;
    if (server) {
        server.kill();
    }
    server = spawn('node', [packageJson.main]);
    server.stdout.on('data', function(data) {
        console.log(data.toString());
        if (started === false) {
            started = true;
            done();
        }
    });
    server.stderr.on('data', function(data) {
        console.error(data.toString());
    });
});

process.on('exit', function() {
    if (server) {
        server.kill();
    }
});

gulp.task('play', ['bundle', 'server:restart'], function() {
    gulp.watch(PATHS.client.ts, ['ts']);
    gulp.watch(PATHS.client.html, ['html']);
    gulp.watch(PATHS.client.css, ['css']);
    gulp.watch(PATHS.client.static, ['static']);
    gulp.watch(packageJson.main, ['server:restart']);
});

gulp.task('default', ['bundle']);

// --------------
// Test.

// To be implemented.

// --------------
// Utils.

function getVersion(){
    var pkg = JSON.parse(fs.readFileSync('package.json'));
    return pkg.version;
}

function registerBumpTasks() {
    semverReleases.forEach(function (release) {
        var semverTaskName = 'semver.' + release;
        var bumpTaskName = 'bump.' + release;
        gulp.task(semverTaskName, function() {
            var version = semver.inc(getVersion(), release);
            return gulp.src('package.json')
                .pipe(bump({ version: version }))
                .pipe(gulp.dest('./'));
        });
        gulp.task(bumpTaskName, function(done) {
            runSequence(semverTaskName, 'build.app.prod', done);
        });
    });
}