import { Label } from './Filter.styled';

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;
