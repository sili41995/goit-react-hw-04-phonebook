import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

const filterId = nanoid();

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input
        id={filterId}
        type='text'
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
