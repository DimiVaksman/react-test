import { Component } from 'react';
export class Form extends Component {
  state = {
    name: '',
    tag: '',
    exp: 'junior',
    licence: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicence = e => {
    console.log(e.currentTarget.checked)
    this.setState({licence: e.currentTarget.checked})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          NickName
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>LVL</p>
        <label htmlFor="">
          <input
            type="radio"
            name="exp"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.exp === 'junior'}
          />{' '}
          Junior
        </label>
        <label htmlFor="">
          {' '}
          <input
            type="radio"
            name="exp"
            value="mid"
            onChange={this.handleChange}
            checked={this.state.exp === 'middle'}
          />{' '}
          Middle
        </label>
        <label htmlFor="">
          {' '}
          <input
            type="radio"
            name="exp"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.exp === 'senior'}
          />{' '}
          Senior
          <label htmlFor="">
            <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handleLicence}/> Согласен
          </label>
        </label>
        <button type="submit" disabled={!this.state.licence }>send</button>
      </form>
    );
  }
}
