import { Button } from './ContactsItem.styled';

const ContactItem = ({ deleteContact, filteredContacts }) => {
  return filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </li>
  ));
};

export default ContactItem;
