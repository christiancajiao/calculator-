import React from "react";
class ResultKey extends React.Component {
  onResultKey = () => {
    const resulthit = this.props.currentInput;

    const convertToNumber = parseInt(resulthit, 10);

    this.props.onResultClick(convertToNumber);
  };
  render() {
    return (
      <div
        id={this.props.symbol}
        className="resultKey"
        onClick={this.onResultKey}
      >
        {this.props.symbol}
      </div>
    );
  }
}

export default ResultKey;
