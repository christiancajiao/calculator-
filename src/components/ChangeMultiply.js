import React from "react";

class ChangeMultiply extends React.Component {
  onChangeMultiply = e => {
    console.log(e.target.id);
    this.props.onChangeMultiply(e.target.id);
  };
  render() {
    return (
      <div
        id={this.props.symbol}
        className="symbol_key"
        onClick={this.onChangeMultiply}
      >
        {" "}
        */÷
      </div>
    );
  }
}

export default ChangeMultiply;
