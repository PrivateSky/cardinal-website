const gulp = require('gulp');
const run  = require("gulp-run-command").default;
const include = require('gulp-include');
const { series } = require('gulp');

function buildWebComponents(cb) {
    let currentDir = process.cwd();
    process.chdir('../pskwebcomponents');
     run('npm run build')().then(function () {
         process.chdir(currentDir);
         cb();
    });
};

function copyAssets(cb) {
    gulp.src('./src/assets/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/assets'));
    cb();
};

function copyJsFile(cb) {

    gulp.src('./node_modules/webcomponents/dist/psk-build.js')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release'));
    cb();
};

function copyJsFolderBuild(cb) {

    gulp.src('./node_modules/webcomponents/dist/psk-build/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/psk-build'));
    cb();
};

function copySourceFiles(cb) {
    gulp.src('src/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/'));
    cb();
};

exports.build = series(buildWebComponents, copyJsFile, copyJsFolderBuild, copySourceFiles);



