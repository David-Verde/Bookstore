import React from 'react';
import categories from './categories';

const BooksForm = () => (
  <form>
    <input type="text" />
    <select name="category">
      {
          categories.map((category) => (<option key={category}>{category}</option>))
        }
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
