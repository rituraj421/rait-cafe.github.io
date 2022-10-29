import React from 'react';

import {  MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading id="mennu" title="Menu" /> */}
      <h1 className="headTText">Menu</h1>
      {/* <h1 className="headText">Today&apos;s Special</h1> */}
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_coffee  flex__center">
        <p className="app__specialMenu-menu_heading">Coffee</p>
        <div className="app__specialMenu_menu_items">
          {data.coffee.map((coffeee, index) => (
            <MenuItem key={coffeee.title + index} title={coffeee.title} price={coffeee.price} tags={coffeee.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button" id='menuButton'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;