import { createSlice } from '@reduxjs/toolkit'
const projectData = createSlice({
    name: 'project',
    initialState: {
        transactions: [],
        balance: 0,
        token: '',
    },
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload.transactions
        },
        insertTransaction: (state, action) => {
            state.transactions.push(action.payload.transaction)
        },
        updateTransaction: (state, action) => {
            state.transactions.map((transaction) => {
                if (transaction.id === action.payload.item.id) {
                    transaction.concept = action.payload.item.concept
                    transaction.amount = action.payload.item.amount
                    transaction.category = action.payload.item.category
                    transaction.date = action.payload.item.date
                    console.log(transaction)
                }
            })
        },
        dropTransaction: (state, action) => {
            console.log(state.transactions.includes(action.payload.transaction))
            state.transactions = state.transactions.filter((value) => {
                return value.id !== action.payload.transaction.id
            })
        },
        setTotalBalance: (state, action) => {
            state.balance = action.payload.total
        },
        setToken: (state, action) => {
            state.token = action.payload.token
        },
    },
})
export const {
    setTransactions,
    dropTransaction,
    insertTransaction,
    setTotalBalance,
    setToken,
    updateTransaction,
} = projectData.actions
export default projectData.reducer
