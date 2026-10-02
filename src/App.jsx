import { useState } from 'react'
//import Login from './pages/login'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home/home';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  }

]);
  

function App() {

  return <RouterProvider router={router} />;
}

export default App
