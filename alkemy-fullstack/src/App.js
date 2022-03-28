import Button from './components/Button'
import Header from './components/Header'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'
import {
    insertTransaction,
    setTransactions,
    setTotalBalance,
    dropTransaction,
} from './redux/reducers/transactions'

function App() {
    const dispatch = useDispatch()
    const [showAddTranscation, setShowAddTranscation] = useState(false)

    const [filter, setFilter] = useState(false)
    const transactions = useSelector((state) => {
        return state.projectData.transactions
    })

    useEffect(() => {
        const getTransactions = async () => {
            const resp = await axios.get('/transactions')
            dispatch(
                setTransactions({ transactions: resp.data ? resp.data : [] })
            )
        }
        getTransactions()
    }, [filter, transactions.length])

    useEffect(() => {
        let total = 0
        transactions.forEach((transaction) => {
            total += transaction.amount * (transaction.type ? 1 : -1)
        })
        dispatch(setTotalBalance({ total: total }))
    }, [transactions])

    const addTransaction = async (transaction) => {
        try {
            const resp = await axios.post('/transactions', transaction)
            if (resp.status === 200) {
                dispatch(insertTransaction({ transaction: resp.data }))
                setShowAddTranscation(!showAddTranscation)
                openNotification('success', 'Transaction created successfully')
            }
        } catch (err) {
            openNotification('error', 'Transaction created error')
        }
    }

    const deleteTransaction = async (transaction) => {
        try {
            const resp = await axios.delete(`/transactions/${transaction.id}`)
            if (resp.status === 200) {
                dispatch(dropTransaction({ transaction: transaction }))
                openNotification('success', 'Transaction deleted successfully')
            }
        } catch (err) {
            openNotification('error', 'Transaction deleted error')
        }
    }

    const openNotification = (type, message) => {
        notification[type]({
            message,
            placement: 'topRight',
        })
    }
    return (
        <div className="container">
            <Header
                filter={filter}
                setFilter={setFilter}
                onAdd={() => setShowAddTranscation(!showAddTranscation)}
            />
            {showAddTranscation && <AddTransaction onAdd={addTransaction} />}
            {transactions.length > 0 ? (
                <Transactions
                    transactions={
                        filter ? transactions.slice(0, 10) : transactions
                    }
                    onDelete={deleteTransaction}
                />
            ) : (
                'No task to show'
            )}
        </div>
    )
}

export default App
