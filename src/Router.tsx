import { createBrowserRouter } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import ReactPage from './pages/ReactPage';
import RouterDomPage from './pages/RouterDomPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'react',
        element: <ReactPage />,
      },
      {
        path: 'router-dom',
        element: <RouterDomPage />,
      },
    ],
  },
]);
