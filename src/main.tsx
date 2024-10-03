import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// ROUTES
import router from './routes';

// COMPONENTS
import { Footer } from './components/Footer';
import { NavBar } from './components/Navbar';

// CSS
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);
