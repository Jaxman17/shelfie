import React from "react";
import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  handleInput = (val) => {
    this.setState({
      name: val,
      price: val,
      imgurl: val
    })
  }


  addItems = () => {
    const newItems = {
      name: this.state.inventory
    };

    axios.post("/api/items", newItems)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

 

  render() {
    return (
      <div>
        <input  />
        <input />
        <input />
        <button>Cancel</button>
        <button onClick={() => this.state.addItems}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;