import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Stylesheets/index.css';
import App from './App';
import NotFound from './NotFound'; // Import your Not Found component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} /> {/*Render App for exact "/home"*/}
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404*/}
    </Routes>
  </BrowserRouter>
);
