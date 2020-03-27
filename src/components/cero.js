import React from "react";
class cero extends React.Component {
  onClickNumber = e => {
    console.log(e.target.id);
    this.props.onNumberClick(e.target.id);
  };

  render() {
    return (
      <div id={this.props.number} className="cero" onClick={this.onClickNumber}>
        {this.props.number}
      </div>
    );
  }
}

export default cero;
