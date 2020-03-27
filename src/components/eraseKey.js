import React from "react";

class EraseKey extends React.Component {
  onClearClick = e => {
    console.log(e.target.id);
    this.props.onClearClick(e.target.id);
  };
  render() {
    return (
      <div className="clearData" onClick={this.onClearClick} id="data">
        →
      </div>
    );
  }
}
export default EraseKey;
