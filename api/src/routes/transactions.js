const { Router } = require('express');
const {getAllTransactions, putOneTransaction}= require('../controllers/transactions')


const router = Router ();

router.get('/');
router.get('/transactions',getAllTransactions);
router.post('/transactions',putOneTransaction);
module.exports = router;