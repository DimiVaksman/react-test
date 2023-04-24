import { Component } from 'react';
const LSKEY = 'reader_items_index';
export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount(){
    const savedState = localStorage.getItem(LSKEY)
    if(savedState){
        this.setState({index: Number(savedState)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LSKEY, this.state.index);
    }
  }

  //   onPrev = () => {
  //     this.setState(state => ({ index: state.index -1}))
  //   }
  //   onNext = () => {
  //     this.setState(state => ({ index: state.index +1}))
  //   }

  render() {
    const cuttentItem = this.props.items[this.state.index];
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={this.state.index + 1 === this.props.items.length}
            onClick={() => this.changeIndex(1)}
          >
            vpered
          </button>
          <button
            type="button"
            disabled={this.state.index === 0}
            onClick={() => this.changeIndex(-1)}
          >
            nazad
          </button>
        </section>
        <p>
          {this.state.index + 1}/{this.props.items.length}
        </p>

        <article>
          <h2>{cuttentItem.title}</h2>
          <p>{cuttentItem.text}</p>
        </article>
      </div>
    );
  }
}
