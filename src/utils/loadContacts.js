const loadContacts = (key) => {
  try {
    const savedContacts = localStorage.getItem(key);
    return savedContacts ? JSON.parse(savedContacts) : [];
  } catch (error) {
    console.log(error);
  }
};

export default loadContacts;
