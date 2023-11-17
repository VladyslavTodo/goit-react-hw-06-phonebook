import { useState, useEffect } from 'react';

import { Base } from './App.styled';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import ContacsForm from 'components/ContactForm/ContactsForm';
import ContactItem from 'components/ContactsItem/ContactsItem';
import Filter from 'components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    const findSomeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findSomeName) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => {
        return contact.id !== contactId;
      })
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Base>
      <h2>Phonebook</h2>
      <ContacsForm handleSubmit={handleSubmit} />
      {contacts.length > 0 && (
        <>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <h2>Contacts</h2>
          <ul>
            <ContactItem
              filteredContacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </ul>
        </>
      )}
    </Base>
  );
};

export default App;
