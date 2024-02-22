const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const purgecss = require('gulp-purgecss');

const folderSrc = 'sass/**/*.scss';

function buildStyles() {
  return src(folderSrc)
    .pipe(sass())
    // note that we lose our autocomplete when purging 
    // .pipe(purgecss({content: ['*.html']}))
    .pipe(dest('dist'))
}

function watchTask() {
  watch([folderSrc, '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)