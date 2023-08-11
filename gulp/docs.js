// Gulp версия для production сборки

const gulp = require('gulp');

// HTML
const fileinclude = require('gulp-file-include');
const htmlclean = require('gulp-htmlclean');
const webpHTML = require('gulp-webp-html');

// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const webpCss = require('gulp-webp-css');

const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const groupMedia = require('gulp-group-css-media-queries');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const changed = require('gulp-changed');

// IMAGES
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');


// Описание задачи для clean. Преффикс :docs - это задача для сборки
gulp.task('clean:docs', function(done){
   if (fs.existsSync('./docs/')) {
      return gulp.src('./docs/', {read: false})
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
gulp.task('html:docs', function(){
   return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
      .pipe(changed('./docs/'))
      .pipe(plumber(plumberNotify('HTML'))) // - title 'HTML'
      .pipe(fileinclude(fileIncludeSetting))
      .pipe(webpHTML())
      .pipe(htmlclean())
      .pipe(gulp.dest('./docs/'))
});

// Описание задачи sass
gulp.task('sass:docs', function(){
   return gulp.src('./src/scss/*.scss')
      .pipe(changed('./docs/css/'))
      .pipe(plumber(plumberNotify('SCSS'))) // - title 'SCSS'
      .pipe(sourceMaps.init())
      .pipe(autoprefixer())
      .pipe(sassGlob())
      .pipe(webpCss())
      .pipe(groupMedia())
      .pipe(sass())
      .pipe(csso())
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('./docs/css/'))
});

// Описание задачи images - переносим картинки в папку docs
gulp.task('images:docs', function(){
   return gulp.src('./src/img/**/*')
      .pipe(changed('./docs/img/'))
      .pipe(webp())
      .pipe(gulp.dest('./docs/img/'))
      
      .pipe(gulp.src('./src/img/**/*'))
      .pipe(changed('./docs/img/'))
      .pipe(imagemin({ verbose: true }))
      .pipe(gulp.dest('./docs/img/'))
});

// Описание задачи fonts - переносим шрифты в папку docs
gulp.task('fonts:docs', function(){
   return gulp.src('./src/fonts/**/*')
      .pipe(changed('./docs/fonts/'))
      .pipe(gulp.dest('./docs/fonts/'))
});

// Описание задачи files - переносим файлы в папку docs
gulp.task('files:docs', function(){
   return gulp.src('./src/files/**/*')
      .pipe(changed('./docs/files/'))
      .pipe(gulp.dest('./docs/files/'))
});

// Обработка JS файлов
gulp.task('js:docs', function(){
   return gulp.src('./src/js/*.js')
      .pipe(changed('./docs/js/'))
      .pipe(plumber(plumberNotify('JS')))
      .pipe(babel())
      .pipe(webpack(require('./../webpack.config.js')))
      .pipe(gulp.dest('./docs/js/'));
});

// Настройки для server
const serverOptions = {
   livereload: true,
   open: true
};

// Описание задачи для server
gulp.task('server:docs', function(){
   return gulp.src('./docs/').pipe(server(serverOptions));
});
