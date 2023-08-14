import PropTypes from 'prop-types';
import { Item } from './Contact.styled';

const Contact = ({ name, number, handleDelBtnClick }) => (
  <Item>
    <span>
      {name}: {number}
    </span>
    <button type='button' onClick={handleDelBtnClick}>
      Delete
    </button>
  </Item>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelBtnClick: PropTypes.func.isRequired,
};

export default Contact;
