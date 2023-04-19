import { PageTitle } from 'components/pagetitle/pageTitle';
import { EventBoard } from 'components/eventBoard/eventBoard';
import upcomingEvent from 'upcoming-events.json';
import { Container } from './App.styled';
import { Counter } from 'components/counter/counter';
import { Dropdown } from 'components/dropdown/dropdown';
import { ColorPicker } from 'components/colorPicker/colorPicker';
// import todos from 'todos.json';
import { TodoList } from 'components/todos/todos';
import { Component } from 'react';
import {Form} from '../form';
import {TodoEditor} from "../todos/todoEditor/todoEditor"
import {LoginForm} from '../LoginForm/LoginForm'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {

  state = {
    todos: [
      { id: 'id-1', text: 'Todo1', completed: false },
      { id: 'id-2', text: 'Todo2', completed: false },
      { id: 'id-3', text: 'Todo3', completed: false },
      { id: 'id-4', text: 'Todo4', completed: false },
    ],

  };

  addTodo = text => {
    console.log(text)
    const todo ={}
  }

  

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };


formSubmitHandle = data => {
  console.log(data)
}
  // handleNameChange = evt => {
  //   this.setState({name: evt.currentTarget.value})
  // }
  // handleTagChange = e => {
  //   this.setState({tag: e.currentTarget.value})
  // }

  render() {
    const { todos } = this.state;
    return (
      <Container>
        {/* <PageTitle text="24th Core Worlds"/> */}
        {/* <EventBoard events={upcomingEvent} /> */}
        {/* <Counter initialValue={0}/> */}
        {/* <Dropdown /> */}
        <LoginForm />
        {/* <ColorPicker options={colorPickerOptions} /> */}
{/* <Form onSubmit={this.formSubmitHandle} anSubmit={this.addTodo}/> */}
{/* <TodoEditor /> */}
      </Container>
    );
  }
}
