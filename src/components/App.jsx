import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import LS_KEY from 'constants/local-storage-key';
import filteredContacts from 'utils/filteredContacts';
import useLocalStorage from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, []);
  const [filter, setFilter] = useState('');

  const visibleContacts = filteredContacts(filter, contacts);

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const handleDelBtnClick = (contactId) => {
    setContacts((prevState) => prevState.filter(({ id }) => id !== contactId));
  };

  const handleFormSubmit = (values, resetForm) => {
    const isContact = contacts.some(({ name }) => name === values.name);
    if (isContact) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    const contact = { id: nanoid(), ...values };
    setContacts((prevState) => [...prevState, contact]);
    resetForm();
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm handleFormSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={visibleContacts}
        handleDelBtnClick={handleDelBtnClick}
      />
    </Section>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
