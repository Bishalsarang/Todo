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
      todos: [],
      displayType: 'all',
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
    let newToDos = [...this.state.todos];
    for (let i = 0; i < newToDos.length; i++) {
      if (newToDos[i].id === id) {
        console.log('done');
        newToDos[i].completed = !newToDos[i].completed;
      }
    }
    console.log(this.state.todos, newToDos);
    this.setState({
      todos: newToDos,
    });
    // console.log('TOggling');
    // let updatedToDo = this.state.todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //   }
    // });
    // console.log('Here', this.state.todos);
    // this.setState(
    //   {
    //     todos: updatedToDo,
    //   },
    //   () => console.log('Here', this.state.todos)
    // );
  };

  handleDisplayType = newDisplayType => {
    this.setState(
      {
        displayType: newDisplayType,
      },
      () => console.log(newDisplayType)
    );
  };

  render() {
    console.log('Rerendering Parent');
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
        />
        <BottomNav todos={this.state.todos} handleDisplayType={this.handleDisplayType} />
      </div>
    );
  }
}

export default App;
