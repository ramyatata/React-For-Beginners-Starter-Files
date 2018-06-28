import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header tagline='Fresh SeaFood Market'/>
        <Order />
        <Inventory />
      </React.Fragment>
    );
  };
}

export default App;