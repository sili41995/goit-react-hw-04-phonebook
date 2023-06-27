import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.styled';

const { Container, Label, Input } = css;

const Filter = ({ value, onChangeInput }) => {
  const filterInputId = nanoid();

  return (
    <Container>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <Input
        type='text'
        id={filterInputId}
        value={value}
        onChange={onChangeInput}
        name='filter'
      />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
