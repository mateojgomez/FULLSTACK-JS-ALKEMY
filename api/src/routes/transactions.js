const { Router } = require('express');
const {getAllTransactions, createTransaction,deleteTransaction,updateTransaction, getTransaction}= require('../controllers/transactions')


const router = Router ();

router.get('/');
router.get('/transactions',getAllTransactions);
router.get('/transactions/:id',getTransaction);
router.post('/transactions',createTransaction);
router.delete('/transactions/:id',deleteTransaction);
router.patch('/transactions/:id',updateTransaction);

module.exports = router;