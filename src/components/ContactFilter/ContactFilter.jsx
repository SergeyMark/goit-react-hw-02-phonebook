import PropTypes from 'prop-types';

export const ContactFilter = ({ filter, handleChange }) => (
    <div>
      <label>Find contacts by name </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
  
  ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };