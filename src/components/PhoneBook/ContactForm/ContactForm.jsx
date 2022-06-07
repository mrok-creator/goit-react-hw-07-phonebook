import { useState, memo } from 'react';

import PropTypes from 'prop-types';

import s from './contactForm.module.css';

function ContactForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ name: '', number: '' });
  };
  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={s.box}>
      <label htmlFor="name" className={s.text}>
        Name
      </label>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        placeholder="Enter Name"
        className={s.input}
        onChange={handleChange}
      />

      <label htmlFor="number" className={s.text}>
        Number
      </label>
      <input
        type="text"
        value={number}
        name="number"
        id="number"
        placeholder="Enter Number"
        className={s.input}
        onChange={handleChange}
      />
      <button className={s.btn}>Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(ContactForm);
