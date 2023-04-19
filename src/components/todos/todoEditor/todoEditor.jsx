import { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({message: e.currentTarget.value}) 
  };

  handeSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.message)

  }
  render() {
    return (
      <form className="todoeditor" onSubmit={this.handeSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type='submit'className='Btn'>ADD</button>
      </form>
    );
  }
}
