import React, { Component } from 'react';
import medalWinners from './mocks/medalwinners';
import SportList from './components/SportList';

class App extends Component {
  render() {
    return (
      <div>
        {
          medalWinners.SportList.map((list, index) => <SportList list={list} key={index} />)
        }
      </div>
    );
  }
}

export default App;
