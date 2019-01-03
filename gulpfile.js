'use strict';

var gulp = require('gulp-runtime').create();

gulp.task('startNodemon',  function(done) {
  var nodemon = require('gulp-nodemon');
  const STARTUP_TIMEOUT = 5000;
  const server = nodemon({
    script: 'app.js',
    stderr: false,
    stdout: false // without this line the stdout event won't fire
  });
  let starting = false;

  const onReady = () => {
    starting = false;
    done();
  };

  server.on('start', () => {
    starting = true;
    setTimeout(onReady, STARTUP_TIMEOUT);
  });

  server.on('stdout', (stdout) => {
    process.stdout.write(stdout); // pass the stdout through
    if (starting) {
      onReady();
    }
  });

  server.on('stderr', (err) => {
    process.stderr.write(err); // pass the stdout through
    if (starting) {
      process.exit(1);
    }
  });

});

gulp.task('default', gulp.series('startNodemon') );

// gulp.task('build', gulp.series('css','vue','minify') );

// gulp.task('dev', gulp.series('css','vue','startNodemon', 'browsersync') );