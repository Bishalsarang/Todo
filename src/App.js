import React from 'react';

// Import Components
import Add from './components/Add';
import Body from './components/Body';
import Modal from './components/Modal';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

// Import Global Styles
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = JSON.parse(localStorage.getItem('todo')) || {
      todos: [],
      displayType: 'all',
    };

    this.priorities = ['low', 'med', 'high'];
  }

  addToDo = item => {
    // Add Recent Items at top
    this.setState({
      todos: [item, ...this.state.todos],
    });
  };

  deleteToDo = id => {
    const remaining = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: remaining,
    });
  };

  toggleCompleted = id => {
    let newToDos = this.state.todos.map(todo => {
      todo.completed = todo.id === id ? !todo.completed : todo.completed;
      return todo;
    });

    this.setState({
      todos: newToDos,
    });
  };

  handleDisplayType = newDisplayType => {
    this.setState({
      displayType: newDisplayType,
    });
  };

  changePriority = id => {
    let newToDos = this.state.todos.map(todo => {
      if (todo.id === id) {
        let newIndex = (this.priorities.indexOf(todo.priority) + 1) % 3;
        todo.priority = this.priorities[newIndex];
      }
      return todo;
    });

    this.setState({
      todos: newToDos,
    });
  };

  componentDidUpdate() {
    localStorage.setItem('todo', JSON.stringify(this.state)); // Save STate to LOcal STorage
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Modal />
        <Add addToDo={this.addToDo} />
        <Body
          todos={this.state.todos}
          displayType={this.state.displayType}
          toggleCompleted={this.toggleCompleted}
          deleteToDo={this.deleteToDo}
          changePriority={this.changePriority}
        />
        <BottomNav
          todos={this.state.todos}
          handleDisplayType={this.handleDisplayType}
        />
      </div>
    );
  }
}

export default App;
