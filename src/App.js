import React, { Component } from "react";

import Alert from "./components/Alert";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "выучить основыReact", completed: false },
      { id: "id-2", text: "вникнуть в React Router", completed: false },
      { id: "id-3", text: "осилить Redux", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  // handleNameChange = (event) => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleNickNameChange = (event) => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ nickName: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <ColorPicker options={colorPickerOptions} />
        <Alert text="WTF???" />
        <Alert text="success" type="success" />
        <Alert text="warning" type="warning" />
        <Alert text="error" type="error" />
        <Counter />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
