const Button = ({data, text, color, onClick}) => {
  return (
    <button  
        style={{backgroundColor: color}} 
        className="btn"
        onClick={() => onClick(data)}>
        {text}
    </button>
  )
}

export default Button