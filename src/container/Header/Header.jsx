import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper  section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"/>
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque delectus, placeat minus accusamus laudantium ut ipsam reiciendis quod accusantium error quam qui assumenda iure? Quas, nobis.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img" id='welcome'>
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
