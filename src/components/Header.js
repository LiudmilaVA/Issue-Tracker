import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='tracker-header'>
      <h1 className='section-title'>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add' } onClick={onAdd} btnClasses={'btn-main'} />
    </header>
  )
}

Header.defaultProps =  {
    title: 'Issue Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;
