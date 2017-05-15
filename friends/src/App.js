import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The <strong>MyFaceBook</strong> Friend Machine</h1>
        <div className='friends'>
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default App;
