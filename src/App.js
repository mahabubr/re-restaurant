import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Fish from './components/Fish/Fish';
import Home from './components/Home/Home';
import Specials from './components/Specials/Specials';
import Welcome from './components/Welcome/Welcome';
import Main from './layout/Main';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import PotFood from './components/PotFood/PotFood';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          loader: async () => fetch('specials.json'),
          element: <Home />
        },
        {
          path: 'welcome',
          element: <Welcome />
        },
        {
          path: 'specials',
          loader: async () => fetch('specials.json'),
          element: <Specials />,
        },
        {
          path: 'menu',
          element: <Menu />,
          loader: async () => fetch('menu.json'),
          children: [
            {
              path: 'fish',
              loader: async () => fetch('menu.json'),
              element: <Fish />
            },
            {
              path: 'pot',
              loader: async () => fetch('menu.json'),
              element: <PotFood />
            }
          ]
        },
      ]
    }
  ])

  return (
    <div data-theme="cupcake">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
