import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Connexion from './Connexion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;

