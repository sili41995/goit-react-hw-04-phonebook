import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import { validateName, validateNumber } from 'utils/validateFields';
import { Container, Input, Label, Error } from './ContactForm.styled';

const INITIAL_STATE = { name: '', number: '' };

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = ({ handleFormSubmit }) => {
  return (
    <Container>
      <Formik initialValues={INITIAL_STATE} onSubmit={handleFormSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div>
              <Label htmlFor={nameId}>Name</Label>
              <Input
                id={nameId}
                type='text'
                name='name'
                validate={validateName}
                required
              />
              {errors.name && touched.name && <Error>{errors.name}</Error>}
            </div>
            <div>
              <Label htmlFor={numberId}>Number</Label>
              <Input
                id={numberId}
                type='tel'
                name='number'
                validate={validateNumber}
                required
              />
              {errors.number && touched.number && (
                <Error>{errors.number}</Error>
              )}
            </div>
            <button type='submit'>Add contact</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

ContactForm.propTypes = { handleFormSubmit: PropTypes.func.isRequired };

export default ContactForm;
