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
	console.log(req.body);
	let user = await sequelize.models.users.findOne({
		where: { username: req.body.username },
	});

	user = user.dataValues;
	console.log(user);
	if (!user)
		return res
			.status(400)
			.json({ error: 'Usuario no encontrado' });

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

	// res.json({
	// 	error: null,
	// 	data: 'exito bienvenido',
	// });
	console.log(validPassword);
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
