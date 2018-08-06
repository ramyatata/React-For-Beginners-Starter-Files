import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish = (fish1) => {
    const newFishes = {...this.state.fishes};
    newFishes[`fish${Date.now()}`] = fish1;
    this.setState({fishes: newFishes});
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  addToOrder = (key) => {
    console.log(`here`);
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
    console.log(this.state.order);
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh SeaFood Market'/>
          <ul className='fishes'>
          {Object.keys(this.state.fishes).map((key) =>
            (<Fish key={key} index={key} details={this.state.fishes[key]}
              addToOrder={this.addToOrder}/>
          ))}
        </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  };
}

export default App;