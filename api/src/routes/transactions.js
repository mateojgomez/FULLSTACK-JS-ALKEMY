const { Router } = require('express');
const {
	getAllTransactions,
	createTransaction,
	deleteTransaction,
	updateTransaction,
	getTransaction,
} = require('../controllers/transactions');
const authenticateToken = require('../middlewares');

const router = Router();

router.get(
	'/transactions',
	authenticateToken,
	getAllTransactions
);
router.get(
	'/transactions/:id',
	authenticateToken,
	getTransaction
);
router.post(
	'/transactions',
	authenticateToken,
	createTransaction
);
router.delete(
	'/transactions/:id',
	authenticateToken,
	deleteTransaction
);
router.patch(
	'/transactions/:id',
	authenticateToken,
	updateTransaction
);

module.exports = router;
