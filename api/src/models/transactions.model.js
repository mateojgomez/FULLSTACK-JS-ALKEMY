const users = require('./users');

module.exports = (sequelize, type) => {
	const Transaction = sequelize.define('transactions', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		concept: type.STRING,
		category: type.STRING,
		date: type.DATE,
		amount: type.DECIMAL(10, 2),
		type: type.BOOLEAN,
	});
	Transaction.associate = (models) => {
		Transaction.belongsTo(models, {
			foreignKey: 'user_id',
			onDelete: 'cascade',
		});
	};
	return Transaction;
};
