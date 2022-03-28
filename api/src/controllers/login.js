const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
	sequelize,
} = require('../loaders/database/conection');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const login = async (req, res) => {
	let user = await sequelize.models.users.findOne({
		where: { username: req.body.username },
	});

	if (!user)
		return res
			.status(400)
			.json({ error: 'Usuario no encontrado' });

	user = user.dataValues;
	// const salt = bcrypt.genSaltSync(10);
	// const hash = bcrypt.hashSync(user.password, salt);
	// console.log(hash);
	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);

	if (!validPassword)
		return res
			.status(400)
			.json({ error: 'contraseña no válida' });

	const token = jwt.sign(
		{
			username: user.username,
			id: user.id,
		},
		process.env.TOKEN_SECRET
	);

	res.header('auth-token', token).json({
		error: null,
		data: { token },
	});
};

module.exports = {
	login,
};
