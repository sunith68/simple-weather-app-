// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
// import data from "./data";

class App extends Component {
 
  render(){ 
    // console.log(data);
    return (
      <div className="App">
        <Title/>
      </div>
    );
  }
}

export default App;
