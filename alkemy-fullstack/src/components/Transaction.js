import removeIcon from '../assets/png/remove.png'
import editIcon from '../assets/png/edit.icon.png'
import { ModalEditTransaction } from './ModalEditTransaction'
import { useState } from 'react'

const Transaction = ({ transaction, onDelete }) => {
    const [modalShow, setModalShow] = useState(false)
    return (
        //no necesito el onDoueble Click de abajo
        <div className={`task ${transaction.type ? 'reminder' : 'reminderr'}`}>
            <div>
                <h2>{transaction.concept}</h2>
                <h3>${transaction.amount}</h3>
            </div>
            <div className="buttons-box">
                <img
                    src={removeIcon}
                    style={{
                        width: '30px',
                        height: '30px',
                        color: 'red',
                        cursor: 'pointer',
                    }}
                    onClick={() => onDelete(transaction)}
                />
                <img
                    src={editIcon}
                    style={{
                        width: '30px',
                        height: '30px',
                        color: 'red',
                        cursor: 'pointer',
                    }}
                    onClick={() => setModalShow(true)}
                />
            </div>
            <ModalEditTransaction
                show={modalShow}
                setModalShow={setModalShow}
                id={transaction.id}
                transaction={transaction}
            />
        </div>
    )
}

export default Transaction
