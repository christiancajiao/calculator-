import React from "react";

class ChangeSymbol extends React.Component {
  onChangeSymbol = e => {
    console.log(e.target.id);
    this.props.onChangeSymbol(e.target.id);
  };
  render() {
    return (
      <div
        id={this.props.symbol}
        className="symbol_key"
        onClick={this.onChangeSymbol}
      >
        {" "}
        +/-
      </div>
    );
  }
}

export default ChangeSymbol;
