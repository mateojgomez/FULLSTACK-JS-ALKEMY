import removeIcon from '../assets/png/remove.png'
import editIcon from '../assets/png/edit.icon.png'
import { ModalEditTransaction } from './ModalEditTransaction'
import { useState } from 'react'

const Transaction = ({ transaction, onDelete }) => {
    const [modalShow, setModalShow] = useState(false)
    return (
        //no necesito el onDoueble Click de abajo
        <div className={`task ${transaction.type ? 'reminder' : 'reminderr'}`}>
            <h3>
                {transaction.concept}
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
            </h3>
            <p>{transaction.amount}</p>
            <ModalEditTransaction
                show={modalShow}
                setModalShow={setModalShow}
                id={transaction.id}
                Transaction={transaction}
            />
        </div>
    )
}

export default Transaction
