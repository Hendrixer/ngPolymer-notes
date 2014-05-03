var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    refresh = require('gulp-livereload'),
    server  = require('tiny-lr')(),
    nodemon = require('gulp-nodemon'),
    stylus  = require('gulp-stylus'),
    notify  = require('gulp-notify'),
    lrPort  = 35729;

var paths = {
  scripts: [
    'app/notes/noteController.js',
    'app/notes/noteDirective.js',
    'app/notes/noteFactory.js',
    'app/notes/note.main.js',
    'app/mainController.js',
    'app/app.js'
  ],
  html: [
    'app/index.html',
    'app/main.html',
    'app/notes/*.html'
  ],
  stylus: 'app/styles/*.styl'
};

gulp.task('lr', function(){
  server.listen(lrPort, function(err){
    if(err) {return console.error(err);}
  });
});

gulp.task('serve', function(){
  nodemon({script: 'index.js',
          ignore: 'client/'
  })
  .on('restart', function(){
    refresh(server);
  });
});

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/'))
    .pipe(refresh(server))
    .pipe(notify({message: 'Concat'}));
});

gulp.task('html', function(){
  return gulp.src(paths.html)
    .pipe(refresh(server))
    .pipe(notify({message: 'Views'}));
});

gulp.task('stylus', function(){
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest('app/styles'))
    .pipe(refresh(server))
    .pipe(notify({message: 'stylus'}));
});

gulp.task('build', ['stylus', 'scripts']);

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['lr', 'serve', 'build', 'watch']);