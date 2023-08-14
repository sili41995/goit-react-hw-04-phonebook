const filteredContacts = (filter, contacts) =>
  filter ? contacts.filter(({ name }) => name.includes(filter)) : contacts;

export default filteredContacts;
