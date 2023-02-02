import React, { Component } from 'react';

class Try extends Component {
  render() {
    const { tryInfo } = this.props;
    return (
      <>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </>
    );
  }
}
export default Try;