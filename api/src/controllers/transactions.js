const express = require('express');
const {
	sequelize,
} = require('../loaders/database/conection');
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllTransactions = async (req, res) => {
	const transactions =
		await sequelize.models.transactions.findAll();
	res.json(transactions);
};

const getTransaction = async (req, res) => {
	const transaction =
		await sequelize.models.transactions.findByPk(
			req.params.id
		);
	res.json(transaction);
};

const deleteTransaction = async (req, res) => {
	const resp =
		await sequelize.models.transactions.destroy({
			where: {
				id: req.params.id,
			},
		});
	res.json(resp);
};

const updateTransaction = async (req, res) => {
	console.log(req.params);
	console.log(req.body);
	try {
		const transactionBody = req.body;
		const resp =
			await sequelize.models.transactions.update(
				{
					concept: transactionBody.concept,
					amount: transactionBody.amount,
					category: transactionBody.category,
					date: transactionBody.date,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);
		res.json(resp);
	} catch (err) {
		console.log(err);
		res.statusCode = 400;
		res.send(`error:${err}`);
	}
};

const createTransaction = async (req, res) => {
	console.log(req.body);
	const resp = await sequelize.models.transactions.create(
		req.body
	);
	res.json(resp);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

module.exports = {
	getAllTransactions,
	createTransaction,
	deleteTransaction,
	updateTransaction,
	getTransaction,
};
