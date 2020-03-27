import React from "react";

class InputPlace extends React.Component {
  onSubmit = () => {
    console.log("hola");
    this.props.onSubmit();
  };
  render() {
    return (
      <div>
        <form>
          <input
            onClick={this.props.onSubmit}
            placeholder={this.props.value}
            type="number"
            className="hola"
          ></input>
        </form>
      </div>
    );
  }
}

export default InputPlace;
