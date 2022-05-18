import React, { Component } from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';

export default class Confetti extends Component {
  explosion;

  triggerConfetti = () => {
    this.explosion && this.explosion.start();
  };

  render() {
    return (
        <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        fallSpeed={3000}
        autoStart={false}
        fadeOut={true}
        ref={ref => (this.explosion = ref)}
      />
    )
  }
}

export const ConfettiContext = React.createContext({value: this.triggerConfetti})