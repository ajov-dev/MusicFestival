
const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber')

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}
function css(done) {
    src('src/scss/**/*.scss')
    .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'));
    done();
}


exports.dev = dev;
exports.css = css;