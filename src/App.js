import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import { bindExpression } from '@babel/types';

class App extends Component {
  
  constructor(props) {
    super(props);
    /* Storing inventory list in App state which will render in the dashboard component.
    Storing the inventory list in the App state. */
    this.state = {
      list: [{
        product_name: "",
        price: 0,
        image_url: ""
      }
      ]
    }
    this.getItems = this.getItems.bind(this);
  }
 //Write a method in App that makes a GET request to the endpoint from index.js
 componentDidMount() {
   this.getItems();  
 } 

  getItems() {
    axios.get("/api/inventory").then(response => { 
      console.log(response.data);
      this.setState({
        list: response.data
      });
    });
  }
 

  render() {
  return (
    <div className="App">
      {/* This is where we pass the inventory list down to the Dashboard component through props.
      Think of inventoryList as a normal attribute in HTML (Ex. img tags have src). This can be any name you
      want to be. The {}'s are what invoke the JS. Below is how the data will render here into Dashboard. We are
      using this.state still because we are still in the App component and b/c the data is in state. */}
      <Dashboard inventoryList={this.state.list}/>
      <Form getItems={this.getItems}/>
      <Header />
    </div>
    );
  }
}

export default App;
