import { createBrowserRouter } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import ReactPage from './pages/ReactPage';
import RouterDomPage from './pages/RouterDomPage';
import AboutPage from './pages/AboutPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: 'react', element: <ReactPage /> },
        { path: 'about', element: <AboutPage /> },
        {
          path: 'test-kcatalog',
          element: <RouterDomPage />,
        },
      ],
    },
  ],
  { basename: '/test-k' }
);
