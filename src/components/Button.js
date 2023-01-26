import PropTypes from 'prop-types';

const Button = ({color, text, onClick, btnClasses}) => {
  return (
    <button onClick={onClick} 
    className={`btn ${btnClasses}`}>
        {text}
    </button>
  )
}

Button.defaultProps =  {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;