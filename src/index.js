import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './componets/context/CartContext';
import { initializeApp } from "firebase/app";
  
const firebaseConfig = {
  apiKey: "AIzaSyDWhRKqlAG2YO3xDxuklQYuhY0qY-9uZkk",
  authDomain: "sublizone-c6062.firebaseapp.com",
  projectId: "sublizone-c6062",
  storageBucket: "sublizone-c6062.appspot.com",
  messagingSenderId: "777244909657",
  appId: "1:777244909657:web:47ff5e0e3e85da51b4d148",
  measurementId: "G-CGZ50KPEEW"
};

  initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
        <App />
    </CartProvider>
  </React.StrictMode>
);


