import { Component } from 'react';

const Modal = ({onClose, onEdit}) => {
  return (
    <div>
        <h2>MODALKA</h2>
      <button type="button" onClick={() => {
        onEdit()
        onClose() 
      }}>UPDATE</button>
      <button type="button" onClick={onClose}>CLOSE</button>
    </div>
  );
};

export class MaterialCard extends Component {
  state = {
    ismodalOpen: false,
  };

  openModal = () => this.setState({ismodalOpen: true})

  closeModal = () => this.setState({ismodalOpen: false})

  render() {
    const { item, onDelete, upDate } = this.props;
    const { ismodalOpen} = this.state
    return (
      <div>
        <p>
          {' '}
          <b>Назва:</b> {item.title}
        </p>
        <p>
          <b>Посилання:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button
          type="button"
        onClick={this.openModal}
        >
          update
        </button>
{ismodalOpen && <Modal onClose={this.closeModal} onEdit={() => upDate({ id: item.id, title: Date.now() })} />}
      </div>
    );
  }
}
