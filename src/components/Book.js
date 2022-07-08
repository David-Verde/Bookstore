// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td><strong>{book.title}</strong></td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = { book: PropTypes.objectOf(PropTypes.any).isRequired };

export default Book;
