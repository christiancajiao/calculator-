import React from "react";

class NumberKey extends React.Component {
  onClickNumber = e => {
    console.log(e.target.id);
    this.props.onNumberClick(e.target.id);
  };

  render() {
    return (
      <div
        id={this.props.number}
        className="number_key"
        onClick={this.onClickNumber}
      >
        {this.props.number}
      </div>
    );
  }
}

export default NumberKey;
