import {
    createBrowserRouter,
} from "react-router-dom";

// PAGE
import { Home } from './pages/home.tsx';
import { Contact } from './pages/contact.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/contact/",
      element: <Contact />
    }
]);

export default router;