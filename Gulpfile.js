var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    refresh = require('gulp-livereload'),
    server  = require('tiny-lr')(),
    nodemon = require('gulp-nodemon'),
    notify  = require('gulp-notify'),
    lrPort  = 35729;

var paths = {
  scripts: [
    'app/notes/noteController.js',
    'app/notes/noteFactory.js',
    'app/notes/note.main.js',
    'app/mainController.js',
    'app/app.js'
  ]
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


gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['lr', 'serve', 'scripts', 'watch']);