import { useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { getContacts } from 'redux/Contacts/contacts-selectors';
import { actions } from 'redux/Contacts/contacts-slice';

import s from './phoneBook.module.css';

function PhoneBook() {
  const contacts = useSelector(getContacts, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const addContacts = useCallback(
    data => {
      const isDuplicated = contacts.find(item => item.name === data.name);
      if (isDuplicated) {
        alert(`${data.name} is already in your Phonebook`);
        return;
      }

      //? add new  contact logic

      return dispatch(actions.add(data));
    },
    [contacts, dispatch]
  );

  const changeFilter = useCallback(
    e => {
      setFilter(e.target.value);
    },
    [setFilter]
  );

  const deleteContacts = useCallback(
    id => {
      return dispatch(actions.remove(id));
    },
    [dispatch]
  );

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const res = name.toLowerCase().includes(filterRequest);
      return res;
    });

    return filteredContacts;
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />

      <h2 className={s.title}>Contacts</h2>

      <Filter onChange={changeFilter} filter={filter} />

      <ContactList
        contacts={getFilteredContacts()}
        deleteContacts={deleteContacts}
      />
    </div>
  );
}

export default PhoneBook;
