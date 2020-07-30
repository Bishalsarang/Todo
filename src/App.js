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
    this.state = {
      todos: [
        {
          id: 123,
          title: 'Task 1',
          description: 'very difficult',
          completed: false,
          priority: 'low',
        },
        {
          id: 124,
          title: 'Task 2',
          description: 'very difficult',
          completed: false,
          priority: 'med',
        },
        {
          id: 125,
          title: 'Task 3',
          description: 'very difficult',
          completed: false,
          priority: 'high',
        },
      ],
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
        <BottomNav />
      </div>
    );
  }
}

export default App;
