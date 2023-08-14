import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { validateName, validateNumber } from 'utils/validateFields';
import { Container, Input, Label, Error } from './ContactForm.styled';

const ContactForm = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => handleFormSubmit(data, reset);

  const validateNameField = validateName();
  const validateNumberField = validateNumber();
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor={nameId}>Name</Label>
          <Input
            id={nameId}
            type='text'
            {...register('name', {
              required: true,
              pattern: validateNameField.pattern,
            })}
          />
          {errors.name && <Error>{validateNameField.errorMessage}</Error>}
        </div>
        <div>
          <Label htmlFor={numberId}>Number</Label>
          <Input
            type='tel'
            id={numberId}
            {...register('number', {
              required: true,
              pattern: validateNumberField.pattern,
            })}
          />
          {errors.number && <Error>{validateNumberField.errorMessage}</Error>}
        </div>
        <button type='submit'>Add contact</button>
      </form>
    </Container>
  );
};

ContactForm.propTypes = { handleFormSubmit: PropTypes.func.isRequired };

export default ContactForm;
