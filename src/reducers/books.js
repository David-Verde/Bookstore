import bookActions from '../actions/actionTypes';

const { CREATE_BOOK, REMOVE_BOOK } = bookActions;


const books = (state = [], { type, book }) => {
  switch (type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter(b => b.id !== book.id) };
    default:
      return state;
  }
};

export default books;
