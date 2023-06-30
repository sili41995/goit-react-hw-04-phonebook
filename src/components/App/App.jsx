import { useEffect, useState } from 'react';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import css from 'components/App/App.styled';

const { Container, Title, Subtitle } = css;

const LOCALE_STORAGE_KEY = 'contactsList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    const savedContacts = JSON.stringify(contacts);
    localStorage.setItem(LOCALE_STORAGE_KEY, savedContacts);

    if (!contacts.length) {
      localStorage.removeItem(LOCALE_STORAGE_KEY);
    }
  }, [contacts]);

  const addContact = (contact) => {
    const contactName = contact.name;
    const contactIndex = contacts.findIndex(({ name }) => name === contactName);
    if (!!~contactIndex) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    setContacts((prevState) => [...prevState, contact]);
  };

  const onDeleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter(({ id: contactId }) => contactId !== id)
    );
  };

  const filterContacts = (value) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = value.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts(filter);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChangeInput={(e) => setFilter(e.target.value)} />
      {!!contacts.length && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      )}
    </Container>
  );
};

export default App;
