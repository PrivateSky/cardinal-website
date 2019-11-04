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
};

function copyThemes(cb) {
    gulp.src('node_modules/webcomponents/themes/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./release/themes'));
    cb();
};

function copySourceFiles(cb) {
    gulp.src('src/**/*')
        .pipe(include({
            separateInputs: false,
        }))
        .pipe(gulp.dest('./release/'));
    cb();
};

function copyFontawesomeCSS(cb){
    gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.css')
        .pipe(gulp.dest("./release/assets/css/fonts/fontawesome/css"));
    cb();
}

function copyFontawesomeFont(cb){
    gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest("./release/assets/css/fonts/fontawesome/webfonts"));
    cb();
}


exports.build = series(buildWebComponents, copyJsFile, copyJsFolderBuild, copyThemes, copySourceFiles, copyFontawesomeCSS, copyFontawesomeFont);



