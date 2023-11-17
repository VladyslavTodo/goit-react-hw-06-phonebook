import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createContact } from 'redux/contactsReducer';
import { getContacts } from 'redux/selectors';

import Notiflix from 'notiflix';
import { nanoid } from '@reduxjs/toolkit';

import { Label, Button, Form } from './ContactsForm.styled';

const ContacsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmitContacts = evt => {
    evt.preventDefault();

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

    dispatch(createContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitContacts}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContacsForm;
