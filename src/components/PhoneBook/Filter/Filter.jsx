import { memo } from 'react';
import PropTypes from 'prop-types';

import s from './filter.module.css';

function Filter({ onChange, filter }) {
  return (
    <>
      <label htmlFor="filter" className={s.text}>
        Find by Name
      </label>
      <input
        type="text"
        value={filter}
        name="filter"
        id="filter"
        placeholder="Find Contact by Name"
        className={s.input}
        onChange={onChange}
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default memo(Filter);
