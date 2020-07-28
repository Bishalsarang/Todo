import React from 'react';

// Import Components

import Header from './components/Header';

// Import Global Styles
import './css/App.css';
import Body from './components/Body';

class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
