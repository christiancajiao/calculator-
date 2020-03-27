import React from "react";

class OperationKey extends React.Component {
  onResultClick = e => {
    console.log(e.target.id);
    this.props.onSymbolClick(e.target.id);
  };
  render() {
    return (
      <div
        id={this.props.symbol}
        className="symbol_key"
        onClick={this.onResultClick}
      >
        {this.props.symbol}
      </div>
    );
  }
}

export default OperationKey;
