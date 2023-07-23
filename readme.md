# Git and GitHub Course

1 - Инициализация проекта. В корне проекта пишем - git init
  - Создаётся служебная попка - .git

2 - git status - это команда позволяет проверить какие файлы у нас не зафиксированы и что вообще происходит в проекте 

3 - git add название файла (git add index.html) - добавляет файл, чтобы следить за ним
  - git add . - добавить к отслеживанию все изменённые файлы

4 - git commit -m "name commit" - Фиксируем коммит. Чем больше коммитов, тем больше сохранений

5 - git branch - смотрим в какой ветке мы находимся
  - git branch name - Создаём ветку с именем name
  - git checkout -b name - Создаём ветку с именем name и перемещаемся в неё
  - git branch -D name - Удаляем ветку с именем name
  - git checkout name - Переходим в ветку name

6 - git merge name - Слияние ветки name с веткой master. Слияние веток производится из ветки master

7 - git config --global user.name - Ваше Имя на GitHub
  - git config --global user.name "name" - Изменить Ваше имя на GitHub
  - git config --global user.email - Ваш Email
  - git config --global user.email "name" - Изменить Ваш email

8 - Создаём репозиторий у себя на GitHub и в терминале забиваем команду - git remote add origin git@github.com:MaksimFrontend/My-Start-Base.git - Имя проекта будет всегда менятся, эту строку копируем после создания репозитория из GitHub

9 - Пушим изменения командой - git push -u origin master

