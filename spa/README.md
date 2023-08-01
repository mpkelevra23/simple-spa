## Запуск

Для разворачивания проекта

```shell
docker-compose up -d --build
```

```shell
docker-compose exec spa yarn install && yarn global add create-react-app && create-react-app app && yarn add react-router-dom@5.2.0
```

```shell
docker-compose exec spa yarn start
```