import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    createContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { createContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
