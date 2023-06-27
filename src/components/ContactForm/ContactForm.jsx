import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from 'components/ContactForm/ContactForm.styled';

const { Label, Button, ErrorText } = css;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };
  const id = {
    nameInputId: nanoid(),
    numberInputId: nanoid(),
  };

  const onFormSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    addContact(contact);
    resetForm();
  };

  const errorText = (msg) => <ErrorText>{msg}</ErrorText>;

  const { nameInputId, numberInputId } = id;

  const Container = styled(Form)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid black;
  `;

  const Input = styled(Field)`
    width: 300px;
  `;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      <Container>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input id={nameInputId} type='text' name='name' />
        <ErrorMessage name='name' render={errorText} />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input id={numberInputId} type='tel' name='number' />
        <ErrorMessage name='number' render={errorText} />
        <Button type='submit'>Add contact</Button>
      </Container>
    </Formik>
  );
};

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
