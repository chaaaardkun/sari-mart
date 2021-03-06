import ReactDOM from 'react-dom';
import './assets/styles/tailwind.css';
import './assets/styles/scss/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppContainer from '@/components/layouts/AppContainer';
import Products from '@/pages/products';
import ViewCart from '@/pages/view-cart';
import { store } from '@/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppContainer>
              <Products />
            </AppContainer>
          }
        />
        <Route
          path="/view-cart"
          element={
            <AppContainer>
              <ViewCart />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
