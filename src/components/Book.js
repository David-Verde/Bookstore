/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td><strong>{book.title}</strong></td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => onClick(book)}>X</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
