import React from 'react';
import PropTypes from 'prop-types';
import Input from './input'
import Cart from '@models/cart';
import { Table, InputGroup, Form, Container } from 'react-bootstrap';
import { observer } from "mobx-react";

export default @observer class Changer extends React.Component {
  state = {
    min: this.props.min,
    max: this.props.max,
    inputValue: this.props.min,
    count: this.props.min,
  }

  inputOnChange = (e) => {
    let newState = { ...this.state, count: e.target.value }
    let { count } = newState
    this.setCount(count)
  }

  plus = () => {
    let newState = { ...this.state }
    let { count } = newState

    this.setCount(count + 1)
  }

  minus = () => {
    let newState = { ...this.state }
    let { count } = newState

    this.setCount(count - 1)
  }

  setCount = (count) => {
    count = this.checkMinMax(count)
    let newState = { ...this.state, inputValue: count }
    let { inputValue } = newState
    this.setState({ count })
    this.setState({ inputValue })
    this.props.changeCountCallback(count)
  }

  checkMinMax(currentValue) {
    return Math.max(this.state.min, Math.min(currentValue, this.state.max))
  }

  render() {
    return(
      <span>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon" onClick={this.minus}>-</InputGroup.Text>
            <Input
              value={this.state.inputValue}
              onChange={this.inputOnChange} />
          <InputGroup.Text id="btnGroupAddon" onClick={this.plus}>+</InputGroup.Text>
        </InputGroup>
      </span>
    )
  }
}

Changer.defaultProps = {
  min: 1,
  max: 10
}

