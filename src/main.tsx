import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// PAGE
import { Home } from './pages/home.tsx';
import { Contact } from './pages/contact.tsx';

// CSS
import './static/css/style.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact/",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
