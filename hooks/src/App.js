import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComp from './FunctionalComp';

export const ThemedContext = React.createContext({hey:"asd"});

class App extends Component {
  render() {
    return (     
      <div className="App">
       <FunctionalComp />
      </div>
    );
  }
}

export default App;
