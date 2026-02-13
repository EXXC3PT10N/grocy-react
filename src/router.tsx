import {createBrowserRouter} from 'react-router'
import App from './App';
import ErrorPage from './ErrorPage';
import Dashboard from './components/Dashboard';
import Stock from './Stock';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "stock",
        element: <Stock />,
      },
      // Możesz też dodać dynamiczne ID
      {
        path: "product/:id",
        element: <div>Szczegóły produktu</div>, 
      }
    ],
  },
]);