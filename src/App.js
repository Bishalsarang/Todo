import React from 'react';

// Import Components
import Add from './components/Add';
import Body from './components/Body';
import Header from './components/Header';

// Import Global Styles
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Design Assignments',
          description: 'SASS',
          priority: 'High',
        },
      ],
    };
  }
  render() {
    return (
      <div className="app container">
        <Header />
        <Body todos={this.state.todos} />
        <Add />
      </div>
    );
  }
}

export default App;
