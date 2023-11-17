import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

import ContacsForm from 'components/ContactForm/ContactsForm';
import ContactItem from 'components/ContactsItem/ContactsItem';
import Filter from 'components/Filter/Filter';

import { Base } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Base>
      <h2>Phonebook</h2>
      <ContacsForm />
      {contacts.length > 0 && (
        <>
          <Filter />
          <h2>Contacts</h2>
          <ul>
            <ContactItem />
          </ul>
        </>
      )}
    </Base>
  );
};

export default App;
