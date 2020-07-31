import React from 'react';

// Import Components
import Add from './components/Add';
import Body from './components/Body';
import Column from './components/Column';
import Search from './components/Search';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

// Import Global Styles
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filteredToDos: [],
      visibility: 'all',
    };

    this.priorities = ['low', 'med', 'high']; // Available Task Priorities
  }

  searchToDo = (searchText = '') => {
    const filteredToDos = this.state.todos.filter(todo => {
      return todo.title.toLowerCase().includes(searchText.toLowerCase());
    });

    this.setState({
      filteredToDos: filteredToDos,
    });
  };

  /**
   * Add TodoItem to Todos
   * @param {object} item TodoItem Object with key [id, title, description, completed, priority]
   *
   */
  addToDo = item => {
    // Add Recent Items at top
    this.setState({
      todos: [item, ...this.state.todos],
      filteredToDos: [item, ...this.state.todos],
    });
  };

  /**
   * Delete TodoItem from Todos
   * @param {string} id unique id associated with  task
   */
  deleteToDo = id => {
    const remaining = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: remaining,
      filteredToDos: remaining,
    });
  };

  /**
   * Toggle isCompleted Status of Todo
   * @param {string} id unique id associated with  task
   */
  toggleCompleted = id => {
    let newToDos = this.state.todos.map(todo => {
      todo.isComplete = todo.id === id ? !todo.isComplete : todo.isComplete;
      return todo;
    });

    this.setState({
      filteredToDos: newToDos,
      todos: newToDos,
    });
  };

  /**
   * Handle Which column is to be made visible
   * @param {string} newVisibility  newVisibility value ['completed', 'remaining', 'all']
   *
   */
  handleVisibility = newVisibility => {
    this.setState({
      visibility: newVisibility,
    });
  };

  /**
   * Change priority of todo with id
   * @param {string} id Unique id associated with todo
   */
  changePriority = id => {
    let newToDos = this.state.todos.map(todo => {
      if (todo.id === id) {
        let newIndex =
          (this.priorities.indexOf(todo.priority) + 1) % this.priorities.length;
        todo.priority = this.priorities[newIndex];
      }

      return todo;
    });

    this.setState({
      todos: newToDos,
    });
  };

  /**
   * Load from Local storage if any
   */
  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('todo'));
    this.setState({
      ...savedState,
      visibility: 'all',
      filteredToDos: savedState.todos,
    });
  }

  /**
   * Save current progress to local storage
   */
  componentDidUpdate() {
    localStorage.setItem('todo', JSON.stringify(this.state)); // Save State to Local Storage
  }

  render() {
    return (
      <div className="app">
        <Header title="Yet Another Todo" />
        <Body>
          <Search searchToDo={this.searchToDo} />
          <Add addToDo={this.addToDo} />

          {this.state.todos.length ? (
            <Column
              todos={this.state.filteredToDos}
              toggleCompleted={this.toggleCompleted}
              deleteToDo={this.deleteToDo}
              changePriority={this.changePriority}
              displayType={this.state.visibility}
            />
          ) : (
            <p className="column--empty neumo-element">Hurray Nothing to do</p>
          )}
        </Body>

        <BottomNav
          todos={this.state.filteredToDos}
          handleDisplayType={this.handleVisibility}
        />
      </div>
    );
  }
}

export default App;
