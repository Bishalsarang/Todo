import React from 'react';

// Import Components
import Add from './components/Add';
import Body from './components/Body';
import Modal from './components/Modal';
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
      todos: [...this.state.todos, item],
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

    selectedTodo.completed = !selectedTodo.completed;
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Modal />
        <Add addToDo={this.addToDo} />
        <Body todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
