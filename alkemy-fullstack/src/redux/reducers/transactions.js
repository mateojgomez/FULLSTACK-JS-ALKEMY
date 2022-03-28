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
} = projectData.actions
export default projectData.reducer
