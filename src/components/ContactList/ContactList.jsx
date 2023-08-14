import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, handleDelBtnClick }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        name={name}
        number={number}
        handleDelBtnClick={() => handleDelBtnClick(id)}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
