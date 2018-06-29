import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fishes: [],
      order: {}
    };
  }

  addFish = (fish) => {
    this.setState
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh SeaFood Market'/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  };
}

export default App;