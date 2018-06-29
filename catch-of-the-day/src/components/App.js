import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish = (fish) => {
    console.log(`fish: ${fish}`);
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({fishes: fishes});
    console.log(this.state.fishes);
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