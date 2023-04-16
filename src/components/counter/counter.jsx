import React from 'react';
import './counter.css';
import { Controls } from './controls';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  plus = () => {
    // const target = event.target

    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  minus = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls onIncr={this.plus} onDisc={this.minus}/> 
        
      </div>
    );
  }
}
