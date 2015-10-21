var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');

var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babel = require('babelify');


var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
  // full details on console
  console.log(title);
  console.log(message);
};

function compile(watch) {
  var bundler = browserify({
    entries: ['./src/app.jsx'],
    transform: [babel, reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  function rebuild(file) {
    // if (file) gutil.log('Recompiling ' + file);
    lint();
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  }

  if (watch) {
    // if watch, do on demand
    bundler = watchify(bundler);
    bundler.on('update', rebuild);
  }

  rebuild();
}

function lint() {
  return gulp.src('./src/**/*.jsx')
    .pipe(eslint())
    .pipe(eslint.failAfterError())
    .pipe(eslint.formatEach('compact', process.stderr));
}

function serve(done) {
  gulp.src('')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/main.js/.test(filePath)) {
            cb(true);
          // } else if(/style.css/.test(filePath)){
          //   cb(true)
          }
        }
      },
      open: true
    }));
};


gulp.task('serve', function() { return serve(false); });
gulp.task('compile', function() { return compile(false); });
gulp.task('watch', function() { return compile(true); });

gulp.task('lint', function() { return lint(); });

gulp.task('default', ['compile', 'serve']);
