import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Contact from './container/Contact/Contact';

// import Table from './container/Table/Table';
// import Register from './Register';
// import Login from './Login';

const App = () => (
  <div>
    <Navbar /> 

    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Contact />
    <FindUs />
    <Footer />
    {/* <Table/> */}
  </div>
);
export default App;
