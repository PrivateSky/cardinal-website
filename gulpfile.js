const gulp = require('gulp');
const run = require("gulp-run-command").default;
const include = require('gulp-include');
const {series} = require('gulp');

function buildWebComponents(cb) {
    let currentDir = process.cwd();
    process.chdir('../pskwebcomponents');
    run('npm run build')().then(function () {
        process.chdir(currentDir);
        cb();
    });
};

function buildSitemap(cb) {
    run('npm run generate-sitemap')().then(cb);
};


function copyJsFile(cb) {

    gulp.src('node_modules/webcomponents/dist/cardinal.js')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release'));
    cb();
};

function copyJsFolderBuild(cb) {

    gulp.src('node_modules/webcomponents/dist/cardinal/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/cardinal'));
    cb();
}

function copyThemes(cb) {
    gulp.src('node_modules/webcomponents/themes/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/themes'));
    cb();
}

function copySourceFiles(cb) {
    gulp.src('src/**/*')
        .pipe(gulp.dest('./release/'));
    cb();
}


exports.build = series(buildWebComponents, buildSitemap, copyJsFile, copyJsFolderBuild, copyThemes, copySourceFiles);



