// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import Book from '../components/Book';

const BookList = ({ books }) => (
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
          <Book key={book.id} book={book} />
        ))
      }
    </tbody>
  </table>
);

BookList.propTypes = { books: PropTypes.arrayOf(PropTypes.object).isRequired };

const mapStateToProps = (state) => ({ books: state.books });

const BookListProvider = connect(mapStateToProps, null)(BookList);

export default BookListProvider;
