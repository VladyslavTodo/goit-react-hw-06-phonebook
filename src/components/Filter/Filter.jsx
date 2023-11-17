import { useDispatch, useSelector } from 'react-redux';

import { filteredContacts } from 'redux/filterReducer';
import { getFilter } from 'redux/selectors';

import { Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filteredContacts(e.target.value));
  };

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
