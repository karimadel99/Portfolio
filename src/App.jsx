import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const routers = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> }
      ]
    }
  ]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <RouterProvider router={routers} />
      )}
    </>
  );
}

export default App;
