
import React from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    console.log(this.state.inventory)
    axios.get("/api/items")
      .then(res => {
        this.setState({inventory: res.data});
      })
      .catch(err => console.log(err));
  };

  addItems = () => {
    const newItems = {
      name: this.state.inventory
    };

    axios
      .post("/api/items", newItems)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getItems={this.state.getItems}
          addItems={this.state.addItems}
        />
        <Form
          inventory={this.state.inventory}
          addItems={this.state.addItems}
        />
      </div>
    );
  }
}

export default App;