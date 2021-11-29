import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from './store-Redux/store'
import { Provider } from 'react-redux'
import NavBar from './components/NavBar';
import { enableMapSet } from 'immer'

enableMapSet();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='questions' element={<App />} >
          <Route path=":currentQuestion" element={<App />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Navigate to="questions" />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
