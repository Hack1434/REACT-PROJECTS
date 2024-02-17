// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Wheel from './components/Wheel';
import List from './components/List';
import Screen from './components/Screen';
import ZingTouch from 'zingtouch';

const App = () => {
  const menuItems = ['Settings', 'Games', 'Music'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (item) => {
    // Add logic to handle item click (hide menu, show screen)
    console.log(`Clicked on ${item}`);
  };

  // eslint-disable-next-line
  useEffect(() => {
    const wheel = document.querySelector('.wheel');
    const region = new ZingTouch.Region(wheel);
  
    region.bind(wheel, 'rotate', function (e) {
      const distance = e.detail.distanceFromLast;
      if (distance > 15) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
      } else if (distance < -15) {
        setActiveIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
      }
    });
  }, [menuItems.length]);
  

  return (
    <div className="App">
      <Wheel />
      <List items={menuItems} onItemClick={handleItemClick} />
      <Screen content={menuItems[activeIndex]} />
    </div>
  );
};

export default App;
