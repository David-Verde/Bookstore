/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import BooksPage from './containers/BooksPage';
import Categories from './containers/Categories';
import store from './redux/createState';
import './index.css';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container d-flex flex-column justify-center align-center">
          <div className="content-container d-flex flex-column justify-center align-center">
            <Navbar />
            <Routes>
              <Route path="/categories" element={<Categories />} />
              <Route exact path="/" element={<BooksPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
