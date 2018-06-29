import React from 'react';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      description: this.descriptionRef.value.value,
      image: this.imageRef.value.value
    };

    console.log(fish);
  }

  render(){
    return(
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name='name' type='text' placeholder='Name' ref={this.nameRef}/>
        <input name='price' type='number' placeholder='Price' ref={this.priceRef}/>
        <select name='status' ref={this.statusRef}>
          <option value={true}>Fresh!</option>
          <option value={false}>SoldOut!</option>
        </select>
        <textarea name='description' placeholder='Description' ref={this.descriptionRef}></textarea>
        <input name='image' placeholder='' placeholder='Image' ref={this.imageRef}/>
        <button type='submit'>Add Fish</button>
      </form>
    );
  }

}

export default AddFishForm;