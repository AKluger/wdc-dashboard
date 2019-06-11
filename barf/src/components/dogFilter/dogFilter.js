import React, { PureComponent } from 'react';

export default class dogFilter extends PureComponent {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.onInput(event.target.value);
  }

  render() {
    return (
      <input
        className="dogFilter"
        onInput={this.handleInput}
        placeholder="Search by k9 name"
      />
    );
  }
}