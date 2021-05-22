import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBiOmIw3FeKfDfZpQyjBNmS_bgIOthOWQ",
  authDomain: "cart-e57b9.firebaseapp.com",
  projectId: "cart-e57b9",
  storageBucket: "cart-e57b9.appspot.com",
  messagingSenderId: "24964514648",
  appId: "1:24964514648:web:366a46d12f32cb7238db2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

