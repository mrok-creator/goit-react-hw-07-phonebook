import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

import s from './contactList.module.css';

function ContactList({ contacts, deleteContacts }) {
  const elements = contacts.map(({ name, id, number }) => (
    <ContactListItem
      key={id}
      options={[name, number, id]}
      deleteContacts={deleteContacts}
    />
  ));
  return <ul className={s.contacts}>{elements}</ul>;
}

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
