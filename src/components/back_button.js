import React from 'react';
import { Button } from 'react-bootstrap';

export default class BackButton extends React.Component {
  render() {
    return(<Button variant={this.props.variant} onClick={this.props.onClickCallback}>{this.props.text}</Button>)
  }
}
