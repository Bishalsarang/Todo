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
    this.setState({
      todos: [...this.state.todos, item],
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
        <Body todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <Add addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
