import PropTypes from 'prop-types';

import s from './contactListItem.module.css';

function ContactListItem({ options, deleteContacts }) {
  const [name, number, id] = options;

  return (
    <li className={s.item}>
      {name}: {number}
      <button
        type="button"
        className={s.btn}
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactListItem;
