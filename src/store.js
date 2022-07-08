import { createStore } from 'redux';
import rootReducer from './reducers/index';
import categories from './components/categories';


const initialState = [];


for (let i = 0; i < 20; i += 1) {
  initialState.push({ id: Math.random(), title: `Book Title - ${i}`, category: categories[Math.floor(Math.random() * categories.length)] });
}

const store = createStore(rootReducer, { books: initialState });

export default store;
