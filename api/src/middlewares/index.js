const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
	const token = req.header('authorization');
	console.log(req.headers);
	if (!token)
		return res
			.status(401)
			.json({ error: 'Acceso denegado' });
	try {
		const verified = jwt.verify(
			token,
			process.env.TOKEN_SECRET
		);
		req.user = verified;
		next(); // continuamos
	} catch (error) {
		res.status(400).json({
			error: 'token no es válido',
		});
	}
}
module.exports = authenticateToken;
