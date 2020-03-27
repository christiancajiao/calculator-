import React from "react";

class ClearData extends React.Component {
  onClearClick = e => {
    console.log(e.target.id);
    this.props.onClearClick(e.target.id);
  };
  render() {
    return (
      <div className="clearData" onClick={this.onClearClick} id="data">
        C
      </div>
    );
  }
}

export default ClearData;
