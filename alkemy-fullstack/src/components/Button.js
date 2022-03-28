const Button = ({ onClick, color }) => {
    return (
        <button
            onClick={() => onClick()}
            className="btn"
            style={{ backgroundColor: color, color: '#fff' }}
        >
            {' '}
            Add Transaction
        </button>
    )
}

export default Button
