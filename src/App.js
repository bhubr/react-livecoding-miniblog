import React, { Component } from 'react';
import Article from './Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>

        <Article title="1st article" text="This is the beginning" />
        <Article title="React is awesome" text="some text" />
        <Article title="But it's damn hard too" text="some VERY inspired text" />
        <Article title="Another title" text="Nothing" />
      </div>
    );
  }
};

export default App;
