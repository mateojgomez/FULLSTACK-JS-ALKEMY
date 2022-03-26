const { Sequelize } = require('sequelize');
const transactions = require('../../models/transactions.model');
const sequelize = new Sequelize('alkemy-db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {decimalNumbers: true},
    define:{
        timestamps:false
    }
  });
  
const Transaction = transactions(sequelize,Sequelize)

  module.exports = {
      Transaction,
      sequelize
  }
