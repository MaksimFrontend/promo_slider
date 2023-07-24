# Стартовый шаблон


## Git and GitHub Course

### Инициализация проекта
1. В корне проекта пишем - git init
2. Создаётся служебная папка - .git

### Отслеживаем состояние изменённых файлов
- git status - это команда позволяет проверить какие файлы у нас не зафиксированы и что вообще происходит в проекте 

### Добавление изменённых файлов к отслеживанию
1. git add название файла (git add index.html) - добавляет файл, чтобы следить за ним
2. git add . - добавить к отслеживанию все изменённые файлы

### Создание коммита
Коммит это точки сохранений к которым мы можем откатиться
+ git commit -m "name commit" - Фиксируем коммит. Чем больше коммитов, тем больше сохранений

### Работа с ветками
1. git branch - смотрим в какой ветке мы находимся
2. git branch name - Создаём ветку с именем name
3. git checkout -b name - Создаём ветку с именем name и перемещаемся в неё
4. git branch -D name - Удаляем ветку с именем name
5. git checkout name - Переходим в ветку name
6. git merge name - Слияние ветки name с веткой master. Слияние веток производится из ветки master

### Профиль на GitHub
1. git config --global user.name - Ваше Имя на GitHub
2. git config --global user.name "name" - Изменить Ваше имя на GitHub
3. git config --global user.email - Ваш Email
4. git config --global user.email "name" - Изменить Ваш email
5. Создаём репозиторий у себя на GitHub
6. В терминале забиваем команду - git remote add origin git@github.com:MaksimFrontend/My-Start-Base.git - Имя проекта будет всегда меняться, эту строку копируем после создания репозитория из GitHub
7. Заливаем проект на github командой - git push -u origin master

### Пушим изменения на GitHub
* git push - заливаем изменения на GitHub

### Клонирование проекта на компьютер
1. git clone адрес SSH ключа, например - git clone git@github.com:MaksimFrontend/My-Start-Base.git - склонирует репозиторий в папку в которой я нахожусь

2. git pull - Если локально ничего не изменилось, но в репозитории GitHub были внесены изменения с другого компьютера - забираем эти изменения с сервера командой git pull



