import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const store = this.myInput.value.value;
    this.props.history.push(`/store/${store}`);
  };

  render() {
    return (
      <React.Fragment>
        <form action='' className='store-selector' onSubmit={this.handleSubmit}>
          <h2>Please enter a Store</h2>
          <input
            type='text'
            required
            placeholder='Store Name'
            defaultValue={getFunName()}
            ref = {this.myInput}>
          </input>
          <button type='submit'>Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;