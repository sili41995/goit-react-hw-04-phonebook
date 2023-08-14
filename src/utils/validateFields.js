export const validateName = () => ({
  pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
  errorMessage: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
});

export const validateNumber = () => ({
  pattern:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
  errorMessage: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
});
