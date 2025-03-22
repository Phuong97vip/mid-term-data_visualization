import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot từ react-dom/client
import App from './App';

// Tạo root và render ứng dụng
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);