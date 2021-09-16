import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
