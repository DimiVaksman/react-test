import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
     }
  }

  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;

    return (
      <>
        {url && !isVideoLoaded && <h2>Loading videos...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
