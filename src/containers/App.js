// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import BookListProvider from './BookList';
// eslint-disable-next-line no-unused-vars
import BooksFormProvider from '../components/BooksForm';

const App = () => (
  <div>
    <BookListProvider />
    <BooksFormProvider />
  </div>
);

export default App;
