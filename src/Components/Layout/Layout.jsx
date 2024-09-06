import { Outlet, Link } from 'react-router-dom';

import React from 'react'
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import StarryBackground from '../StarryBackground/StarryBackground';


function Layout() {
  return <>
           <StarryBackground />
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
  </>

  
}

export default Layout;
