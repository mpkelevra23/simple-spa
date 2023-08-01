# Базовый образ
FROM node:16-alpine

# Аргумент с именем проекта
ARG project_name

# Создание директории для проекта
RUN mkdir -p /var/www/$project_name

# Установка рабочей директории
WORKDIR /var/www/$project_name

# Копирование файлов проекта в рабочую директорию
#COPY spa/package.json spa/yarn.lock ./

# Установка зависимостей с помощью Yarn
RUN apk update && apk add bash
#    && yarn install && yarn global add create-react-app && create-react-app app && yarn add react-router-dom@5.2.0

# Открытие порта, на котором будет работать приложение
EXPOSE 3000

# Запуск приложения
#CMD ["yarn", "start"]
