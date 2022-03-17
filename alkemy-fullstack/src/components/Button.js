const Button = ({onClick,color}) => {
  return  <button onClick={() => onClick()} className= 'btn' style={{ backgroundColor: color }} > Add Transaction</button>
} 

export default Button