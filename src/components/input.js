import React from 'react';
import { observer } from "mobx-react";

export default @observer class Input extends React.Component {
  inputRef = React.createRef();

  componentWillReceiveProps(nextProps) {
    this.inputRef.current.value = nextProps.value
  }

  render() {
    return(
      <span>
        <input defaultValue={this.props.value} onBlur={this.props.onChange} ref={this.inputRef} className="form-control" />
      </span>
    )
  }
}
