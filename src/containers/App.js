import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';

const App = () => (
  <div>
    <BookListProvider />
    <BooksFormProvider />
  </div>
);

export default App;
