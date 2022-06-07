import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'shared/services/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    const data = await API.getContacts();

    try {
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, getState }) => {
    const { contacts } = getState();

    const isDuplicated = contacts.items.find(
      item => item.name === contact.name
    );

    if (isDuplicated) {
      alert(`${contact.name} is already in your Phone Book`);
      return;
    }

    try {
      const data = await API.addContact(contact);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (contact, { getState }) => {
      const { contacts } = getState();

      const isDuplicated = contacts.items.find(
        item => item.name === contact.name
      );

      if (isDuplicated) {
        alert(`${contact.name} is already in your Phone Book`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    const data = await API.removeContact(id);
    try {
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
