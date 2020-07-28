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
      todos: [],
    };
  }

  addToDo = item => {
    console.log('OMG called', item);
    console.log(this);
    this.setState({
      todos: [...this.state.todos, item],
    });
  };

  render() {
    return (
      <div className="app container">
        <Header />
        <Body todos={this.state.todos} />
        <Add addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
