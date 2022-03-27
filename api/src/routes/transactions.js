const { Router } = require('express');
const {
	getAllTransactions,
	createTransaction,
	deleteTransaction,
	updateTransaction,
	getTransaction,
} = require('../controllers/transactions');

const router = Router();

router.get('/');
router.get('/', getAllTransactions);
router.get('/:id', getTransaction);
router.post('', createTransaction);
router.delete('/:id', deleteTransaction);
router.patch('/:id', updateTransaction);

module.exports = router;
