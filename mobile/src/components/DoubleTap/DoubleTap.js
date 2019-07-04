import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export default class DoubleTap extends Component {
  static defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
  };

  lastTap = null;

  handleDoubleTap = () => {
    const now = Date.now();
    let { lastTap } = this;
    const { props } = this;

    if (lastTap && now - lastTap < props.delay) {
      props.onDoubleTap();
      lastTap = null;
    } else {
      lastTap = now;
    }
  };

  render() {
    const { props } = this;

    return (
      <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
        {props.children}
      </TouchableWithoutFeedback>
    );
  }
}
