import { PageTitle } from 'components/pagetitle/pageTitle';
import { ToastContainer } from 'react-toastify';
import { EventBoard } from 'components/eventBoard/eventBoard';
import upcomingEvent from 'upcoming-events.json';
import { Container } from './App.styled';
import { Counter } from 'components/counter/counter';
import { Dropdown } from 'components/dropdown/dropdown';
import { ColorPicker } from 'components/colorPicker/colorPicker';
// import todos from 'todos.json';
import { TodoList } from 'components/todos/todos';
import { Component } from 'react';
import { Form } from '../form';
import { TodoEditor } from '../todos/todoEditor/todoEditor';
import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from '../modal/modal';

import videos from 'videos.json';
import { VideoList } from '../videolist/videolist';

import { Player } from '../player/player';

import { Reader } from '../reader/Reader';
import publications from 'publications.json';
import PokemonForm from 'components/pokemon/pokemonForm';
import { PokemonInfo } from 'components/pokemon/pokemonInfo';
import { ColorPickerNew } from 'components/colorPicker/colorPickerNew';

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
    // todos: [
    //   { id: 'id-1', text: 'Todo1', completed: false },
    //   { id: 'id-2', text: 'Todo2', completed: false },
    //   { id: 'id-3', text: 'Todo3', completed: false },
    //   { id: 'id-4', text: 'Todo4', completed: false },
    // ],
    // showModal: false,
    // selectedVideo: null,

    pokemon: null,
    loading: false,
    pokemonName: '',
  };

  // selectVideo = link => {
  //   this.setState({selectedVideo: link})
  // }

  // toggleModal = () => {
  //   this.setState(state => ({
  //     showModal:  !state.showModal
  //   }))
  // }

  // addTodo = text => {
  //   console.log(text)
  //   const todo ={}
  // }

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // formSubmitHandle = data => {
  //   console.log(data)
  // }
  // handleNameChange = evt => {
  //   this.setState({name: evt.currentTarget.value})
  // }
  // handleTagChange = e => {
  //   this.setState({tag: e.currentTarget.value})
  // }

  // -=====================================POKEMON

hendleFormSubmit = pokemonName => {
  this.setState({pokemonName})
}
  render() {
    const { todos, showModal } = this.state;

    return (
      <Container>

{/* <ColorPicker options={colorPickerOptions} /> */}
{/* <ColorPickerNew options={colorPickerOptions} /> */}
        {/* <PokemonForm onSubmit={this.hendleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000}/> */}
        {/* <PageTitle text="24th Core Worlds"/> */}
        {/* <EventBoard events={upcomingEvent} /> */}
        <Counter initialValue={0}/>
        {/* <Dropdown />
        <LoginForm />
<Form onSubmit={this.formSubmitHandle} anSubmit={this.addTodo}/>
<TodoEditor /> */}
        {/* <button type='button' onClick={this.toggleModal}>Open Modal</button>

{showModal && (
<Modal onClose={this.toggleModal}>
<h2>THIS IS MODAL</h2>
<button type='button'onClick={this.toggleModal}>Close</button>
</Modal> 
)}

<h1>Video{this.selectedVideo}</h1>
<VideoList videos={videos} onSelect={this.selectVideo}/>
<Player url={this.state.selectedVideo} /> */}

        {/* <Reader items={publications}/>*/}
      </Container>
    );
  }
}
