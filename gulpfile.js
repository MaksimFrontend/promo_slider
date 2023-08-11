<<<<<<< HEAD
const gulp = require('gulp');

require('./gulp/dev.js'); // Подключаем файл dev.js
require('./gulp/docs.js');// Подключаем файл docs.js

// Описание основной задачи gulp - запуск сборки версии для разработки
gulp.task(
   'default',
   gulp.series(
      'clean:dev',
      gulp.parallel('html:dev', 'sass:dev', 'js:dev', 'images:dev', 'fonts:dev', 'files:dev'),
      gulp.parallel('server:dev', 'watch:dev')
   )
);

// Описание основной задачи gulp - запуск сборки версии для production
gulp.task(
   'docs',
   gulp.series(
      'clean:docs',
      gulp.parallel('html:docs', 'sass:docs', 'js:docs', 'images:docs', 'fonts:docs', 'files:docs'),
      gulp.parallel('server:docs')
   )
=======
const gulp = require('gulp');

require('./gulp/dev.js'); // Подключаем файл dev.js
require('./gulp/docs.js');// Подключаем файл docs.js

// Описание основной задачи gulp - запуск сборки версии для разработки
gulp.task(
   'default',
   gulp.series(
      'clean:dev',
      gulp.parallel('html:dev', 'sass:dev', 'js:dev', 'images:dev', 'fonts:dev', 'files:dev'),
      gulp.parallel('server:dev', 'watch:dev')
   )
);

// Описание основной задачи gulp - запуск сборки версии для production
gulp.task(
   'docs',
   gulp.series(
      'clean:docs',
      gulp.parallel('html:docs', 'sass:docs', 'js:docs', 'images:docs', 'fonts:docs', 'files:docs'),
      gulp.parallel('server:docs')
   )
>>>>>>> d7db29703f73a539a2df529c916dee8ba266e944
);