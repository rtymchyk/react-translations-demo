const gulp = require('gulp')
const babel = require('gulp-babel')
const po2json = require('gulp-po2json')
const concat = require('gulp-concat-po')
const del = require('del')

const LOCALES_DIR = 'locales/'
const JED_FORMAT = 'jed1.x'

gulp.task('extract-individual', () => {
  del(['locales/working/**/*.po'])

  return gulp.src(['src/components/*.js', 'routes/*.js'])
    .pipe(babel({
      plugins: ['@babel/syntax-jsx', ['extract-text', {
        includeReference: true,
        baseReferenceDir: __dirname,
        outputDir: 'locales/working',
        headers: {
          'po-revision-date': new Date().toISOString(),
        },
        component: {
          name: 'Message',
        },
      }]],
    }))
})

gulp.task('extract', ['extract-individual'], () => {
  return gulp.src('locales/working/*.js.po')
    .pipe(concat('en-US.po'))
    .pipe(gulp.dest('locales'))
})

gulp.task('import-fr', () => {
  return gulp.src(['locales/fr.po'])
    .pipe(po2json({ format: JED_FORMAT, domain: 'fr' }))
    .pipe(gulp.dest(LOCALES_DIR))
})

gulp.task('import-en-US', () => {
  return gulp.src(['locales/en-US.po'])
    .pipe(po2json({ format: JED_FORMAT, domain: 'en-US' }))
    .pipe(gulp.dest(LOCALES_DIR))
})

gulp.task('import', ['import-en-US', 'import-fr'])
