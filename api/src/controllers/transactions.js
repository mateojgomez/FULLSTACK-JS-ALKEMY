const express = require('express');

const transactionsSaved = [
    {id:1,
        concept:'Medic',
        amount:200,
        type:false,
        description:'Health'},  
    {id:2,
        concept:'Salary',
        amount:2000,
        type:true,
        description:'Income'
    },  
    {id:3,
        concept:'Cinema',
        amount:500,
        type:false,
        description:'Leisure'
    },
];

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllTransactions = (req,res) =>{
    const transactions = transactionsSaved;
    res.json(transactions);
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const putOneTransaction = (req,res) => {
console.log(req.body);
transactionsSaved.push(req.body);
res.json(req.body).status(201);
}

module.exports = {getAllTransactions, putOneTransaction}