import React from 'react';

export default class Input extends React.Component {
  state = {
    min: this.props.min,
    max: this.props.max
  }

  inputRef = React.createRef();

  handleBlur = (e) => {
    this.inputRef.current.value = this.checkMinMax(e.target.value)
    this.props.onChange(e)
  }

  componentWillReceiveProps(nextProps) {
    this.inputRef.current.value = this.checkMinMax(nextProps.value)
  }

  checkMinMax(currentValue) {
    return Math.max(this.state.min, Math.min(currentValue, this.state.max))
  }

  render() {
    return(
      <span>
        <input defaultValue={this.props.value} onBlur={this.handleBlur} ref={this.inputRef} />
      </span>
    )
  }
}
