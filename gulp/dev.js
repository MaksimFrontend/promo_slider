// Gulp версия для разработки

const gulp = require('gulp');

// HTML-шаблонизатор
const fileinclude = require('gulp-file-include');

// Компилятор sass в css
const sass = require('gulp-sass')(require('sass'));
// Позволяет одной командой подключать все файлы из папки - @import "./blocks/*.scss";
const sassGlob = require('gulp-sass-glob');

const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

// Описание задачи для clean. Преффикс :dev - это задача для разработки
gulp.task('clean:dev', function(done){
   if (fs.existsSync('./build/')) {
      return gulp.src('./build/', {read: false})
         .pipe(clean({force: true}));
   }
   done();
});                                 

// Настройки для подключения шаблонов в html
const fileIncludeSetting = {
   prefix: '@@',
   basepath: '@file'
};

// Настройки для plumberNotify - Мы передаём title
const plumberNotify = (title) => {
   return {
      errorHandler: notify.onError({
         title: title,
         message: 'Error <%= error.message %>',
         sound: false
      }),
   };
}

// Описание задачи для подключения шаблонов в html
gulp.task('html:dev', function(){
   return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
      .pipe(changed('./build/', { hasChanged: changed.compareContents }))
      .pipe(plumber(plumberNotify('HTML'))) // - title 'HTML'
      .pipe(fileinclude(fileIncludeSetting))
      .pipe(gulp.dest('./build/'))
});

// Описание задачи sass
gulp.task('sass:dev', function(){
   return gulp.src('./src/scss/*.scss')
      .pipe(changed('./build/css/'))
      .pipe(plumber(plumberNotify('SCSS'))) // - title 'SCSS'
      .pipe(sourceMaps.init())
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('./build/css/'))
});

// Описание задачи images - переносим картинки в папку public
gulp.task('images:dev', function(){
   return gulp.src('./src/img/**/*')
      .pipe(changed('./build/img/'))
      .pipe(imagemin({ verbose: true }))
      .pipe(gulp.dest('./build/img/'))
});

// Описание задачи fonts - переносим шрифты в папку public
gulp.task('fonts:dev', function(){
   return gulp.src('./src/fonts/**/*')
      .pipe(changed('./build/fonts/'))
      .pipe(gulp.dest('./build/fonts/'))
});

// Описание задачи files - переносим файлы в папку public
gulp.task('files:dev', function(){
   return gulp.src('./src/files/**/*')
      .pipe(changed('./build/files/'))
      .pipe(gulp.dest('./build/files/'))
});

// Обработка JS файлов
gulp.task('js:dev', function(){
   return gulp.src('./src/js/*.js')
      .pipe(changed('./build/js/'))
      .pipe(plumber(plumberNotify('JS')))
      // .pipe(babel())
      .pipe(webpack(require('./../webpack.config.js')))
      .pipe(gulp.dest('./build/js/'));
});

// Настройки для server
const serverOptions = {
   livereload: true,
   open: true
};

// Описание задачи для server
gulp.task('server:dev', function(){
   return gulp.src('./build/').pipe(server(serverOptions));
});

// Описание задачи для наблюдателя
gulp.task('watch:dev', function(){
   gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev')); // gulp.parallel('sass')) - это название задачи (таска) 'sass'
   gulp.watch('./src/html/**/*.html', gulp.parallel('html:dev')); // gulp.parallel('html')) - это название задачи (таска) 'html'
   gulp.watch('./src/img/**/*', gulp.parallel('images:dev'));     // gulp.parallel('images')) - это название задачи (таска) 'images'
   gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'));
   gulp.watch('./src/files/**/*', gulp.parallel('files:dev'));
   gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'));
});
