import React from 'react';
import { ThemedContext } from './App';

export default class ContextEg extends React.Component {
  constructor(props){
    super(props);
    this.state={counter }
  }

  render() {
    return (
      <React.StrictMode>
      <ThemedContext.Consumer>
        {value => (
          <button>{value.hey}</button>
        )
        }
      </ThemedContext.Consumer>
      </React.StrictMode>
    )
  }
}