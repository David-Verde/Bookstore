const ADD_BOOK = 'bookstore/src/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/REMOVE_BOOK';

const initialState = {
  books: [
    {
<<<<<<< Updated upstream
      id: 1,
=======
      id: '1',
>>>>>>> Stashed changes
      category: 'Action',
      author: 'Suzanne Collins',
      title: 'The Hunger Games',
    },
    {
<<<<<<< Updated upstream
      id: 2,
=======
      id: '2',
>>>>>>> Stashed changes
      category: 'Science Fiction',
      author: 'Frank Herbert',
      title: 'Dune',
    },
    {
<<<<<<< Updated upstream
      id: 3,
=======
      id: '3',
>>>>>>> Stashed changes
      category: 'Economy',
      author: 'Suzanne Collins',
      title: 'Capital in the Twenty-first Century',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default booksReducer;
