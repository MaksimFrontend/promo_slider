<<<<<<< HEAD
const config = {
   mode: 'production', // Определяем режим работы - production, еще бывает режим работы - development

   entry: {
      index: './src/js/index.js', // Здесь указывается файл, который мы будем обрабатывать. Для каждой страницы сайта свой JS файл. Название и путь
   },

   output: {
      filename: '[name].bundle.js', // В name попадает имя файла JS. Например contacts.js
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
};

=======
const config = {
   mode: 'production', // Определяем режим работы - production, еще бывает режим работы - development

   entry: {
      index: './src/js/index.js', // Здесь указывается файл, который мы будем обрабатывать. Для каждой страницы сайта свой JS файл. Название и путь
   },

   output: {
      filename: '[name].bundle.js', // В name попадает имя файла JS. Например contacts.js
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
};

>>>>>>> d7db29703f73a539a2df529c916dee8ba266e944
module.exports = config;