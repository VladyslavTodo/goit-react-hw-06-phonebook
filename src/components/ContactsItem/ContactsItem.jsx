import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactsReducer';
import { getContacts, getFilter } from 'redux/selectors';

import { Button } from './ContactsItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </li>
  ));
};

export default ContactItem;
