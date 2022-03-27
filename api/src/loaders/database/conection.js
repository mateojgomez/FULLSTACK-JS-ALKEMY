const { Sequelize } = require('sequelize');
const transactions = require('../../models/transactions.model');
const users = require('../../models/users');
const sequelize = new Sequelize(
	'alkemy-db',
	'root',
	'rootroot',
	{
		host: 'localhost',
		dialect: 'mysql',
		dialectOptions: { decimalNumbers: true },
		define: {
			timestamps: false,
		},
	}
);

const Transaction = transactions(sequelize, Sequelize);
const User = users(sequelize, Sequelize);
module.exports = {
	Transaction,
	User,
	sequelize,
};
