const gulp = require('gulp');
const babel = require('gulp-babel');
const po2json = require('gulp-po2json');

const LOCALES_DIR = 'locales/';
const JED_FORMAT = 'jed1.x';

gulp.task('extract-strings', () => {
  return gulp.src(['components/*.js', 'routes/*.js'])
    .pipe(babel({
      plugins: ['syntax-jsx', ['babel-extract-gettext', {
        outputFile: 'locales/en-US.po',
        includeReference: true,
        baseDir: '/Users/rtymchyk/react-translations-demo',
        headers: {
          'po-revision-date': new Date().toISOString(),
        },
        component: {
          name: 'Message',
        },
      }]],
    })
    .on('error', (err) => {
      console.error(err);
    }));
});

gulp.task('build-fr', () => {
  return gulp.src(['locales/fr.po'])
          .pipe(po2json({ format: JED_FORMAT, domain: 'fr' }))
          .pipe(gulp.dest(LOCALES_DIR));
});


gulp.task('build-en-US', () => {
  return gulp.src(['locales/en-US.po'])
          .pipe(po2json({ format: JED_FORMAT, domain: 'en-US' }))
          .pipe(gulp.dest(LOCALES_DIR));
});

gulp.task('build-strings', ['build-en-US', 'build-fr']);
