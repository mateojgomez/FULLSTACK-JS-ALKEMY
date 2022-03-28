# FULLSTACK-JS-ALKEMY

## Finance Tracker

Its a personal budget manager web app made as a challenge for alkemy labs

## Features

##### Transaction CRUD

## Technologies used

#### Express

#### React

#### Mysql

#### Sequelize

## Screenshots

##### Homepage

![](screenshots/HomePage.jpg? 'HomePage')

##### Login

![](screenshots/Login.jpg? 'HomePage')

##### Create transaction modal form

![](screenshots/AddTransaction.jpg? 'AddTransaction')

##### User feed back add transaction

![](screenshots/UserFeedbackAdd.jpg? 'UpdateModalForm')

##### User feedback delete transaction

![](screenshots/UserFeedbackDelete.jpg? 'UpdateModalForm')

##### User feedback update transaction

![](screenshots/UserFeedbackUpdate.jpg? 'UpdateModalForm')

## Installation

Clone this repo
Place yourself in

```console
FULLSTACK-JS-ALKEMY\api
```

and run

```console
npm install
```

After that, you have to create a Schema called 'alkemy-db' in Mysql
and change the parameter on the sequelize constructor

```console
  api/db.js
```

```json
const sequelize = new Sequelize('alkemy','root','rootroot', {
    host:'localhost',
    dialect:'mysql',
    dialectOptions: {decimalNumbers: true},
    define:{
        timestamps:false
    }
```

Now you can start the server running:

```console
  npm start
```

Thats all with the server.

For running the react client, place yourself in

```console
FULLSTACK-JS-ALKEMY\alkemy-fullstack
```

and run

```console
npm install
```

Now you can just open it in your browser

```console
localhost:3000
```
