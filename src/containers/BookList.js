/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BookList = ({ books, removeBook }) => (
  <table>
    <theader>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>CategoryAge</th>
      </tr>
    </theader>
    <tbody>
      {
        books.map((book) => (
          <Book key={book.id} book={book} onClick={removeBook} />
        ))
      }
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

const BookListProvider = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListProvider;
