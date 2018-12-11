# Steps for creating the database

## Install all dependencies

```
npm install --save sequelize sqlite3 sequelize-cli
```

## Initialize the folder structure

```
node_modules/.bin/sequelize init
```

## Choose which database Sequelize uses

Change the code in config/config.json to be:

```
{
  "development": {
    "dialect": "sqlite",
    "storage": "./database.sql"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./database.sql"
  }
}
```

## Create your first model

```
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

## Migrate all migrations

```
node_modules/.bin/sequelize db:migrate
```

## Create a new Seeds file

```
node_modules/.bin/sequelize seed:generate --name seed-user
```

## Seed the database

```
node_modules/.bin/sequelize db:seed:all
```
