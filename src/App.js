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
    // Add Recent Items at top
    this.setState({
      todos: [item, ...this.state.todos],
    });
  };

  deleteToDo = id => {
    const remaining = this.state.todos.filter((todo, index) => {
      return todo.id !== id;
    });

    this.setState({
      todos: remaining,
    });
  };

  toggleCompleted = id => {
    const selectedTodo = this.state.todos.filter(todo => {
      return todo.id === id;
    })[0];
    console.log(selectedTodo);
    selectedTodo.completed = !selectedTodo.completed;
  };

  render() {
    return (
      <div className="app container">
        <Header />
        <Add addToDo={this.addToDo} />
        <Body todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
