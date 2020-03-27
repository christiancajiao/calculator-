import React from "react";

class RaizCuadrada extends React.Component {
  onSquareRoot = e => {
    console.log(e.target.id);
    this.props.onSquareRoot(e.target.id);
  };
  render() {
    return (
      <div
        id={this.props.symbol}
        className="symbol_key"
        onClick={this.onSquareRoot}
      >
        √
      </div>
    );
  }
}

export default RaizCuadrada;
