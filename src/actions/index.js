import bookActions from './actionTypes';

const { CREATE_BOOK, REMOVE_BOOK } = bookActions;

const createBook = book => ({ type: CREATE_BOOK, book });

const removeBook = book => ({ type: REMOVE_BOOK, book });

export { createBook, removeBook };
