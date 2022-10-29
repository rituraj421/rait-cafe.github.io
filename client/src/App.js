import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Contact from './container/Contact/Contact';

// import Register from './Register';
// import Login from './Login';

const App = () => (
  <div>
    <Navbar />
    {/* <Login /> */}
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
  </div>
);
export default App;
