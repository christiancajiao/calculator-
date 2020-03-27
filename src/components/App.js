import React from "react";
import InputPlace from "./InputPlace";
import NumberKey from "./NumberKey";
import OperationKey from "./OperationKey";
import ResultKey from "./ResultKey";
import ClearData from "./ClearData";
import Cero from "./cero";
import EraseKey from "./eraseKey";
import RaizCuadrada from "./RaizCuadrada";
import ChangeSymbol from "./ChangeSymbol";
import ChangeMultiply from "./ChangeMultiply";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  state = {
    number: [0],
    currentInput: "",
    actualOperation: 0,
    simbolo: ""
  };
  checkForOperation = () => {
    let a = this.state.currentInput;
    let b = this.state.actualOperation;
    let c = this.state.simbolo;

    if (a >= 0 && b >= 0) {
      this.operationResult(c);
    } else if (b >= 0 && a === "") {
      return;
    } else {
      return;
    }
  };
  operationResult = param => {
    let resulthit = this.state.actualOperation;
    let convertToNumber = parseFloat(resulthit, 10);
    let resultado1 = Math.round(convertToNumber * 100) / 100;

    let resultCurrent = this.state.currentInput;
    let convertirNumero = parseFloat(resultCurrent, 10);
    let resultado2 = Math.round(convertirNumero * 100) / 100;

    switch (param) {
      case "+":
        return this.setState({
          actualOperation: resultado1 + resultado2
        });
      case "-":
        return this.setState({
          actualOperation: resultado1 - resultado2
        });
      case "÷":
        return this.setState({
          actualOperation: resultado1 / resultado2
        });
      case "*":
        return this.setState({
          actualOperation: resultado1 * resultado2
        });
    }
  };
  onNumberClick = number => {
    if (this.state.number === ".") {
      console.log("condicion1");
      this.setState({ number: number });
      this.setState({ currentInput: this.state.currentInput + number });
    } else if (number === "." && this.state.currentInput === "") {
      console.log("condicion2");
      return;
    }
    this.setState({ number: number });
    this.setState({ currentInput: this.state.currentInput + number });
  };
  onResultClick = number => {
    if (this.state.actualOperation === 0) {
      return;
    } else if (
      this.state.actualOperation !== 0 &&
      this.state.currentInput === ""
    ) {
      return;
    }
    this.checkForOperation(number);
    this.setState({
      currentInput: "",
      simbolo: ""
    });

    this.checkForOperation(number);
  };

  onSymbolClick = param => {
    if (this.state.simbolo === param) {
      this.checkForOperation(param);
    } else if (
      this.state.currentInput === "" &&
      this.state.actualOperation === 0
    ) {
      return;
    } else if (
      this.state.actualOperation !== 0 &&
      this.state.currentInput === ""
    ) {
      this.checkForOperation(param);
    }
    this.setState({ simbolo: param });

    if (this.state.actualOperation === 0) {
      const resulthit = this.state.actualOperation;
      const convertToNumber = parseInt(resulthit, 10);
      let resultado1 = Math.round(convertToNumber * 100) / 100;
      const resultCurrent = this.state.currentInput;
      const convertirNumero = parseFloat(resultCurrent, 10);
      let resultado2 = Math.round(convertirNumero * 100) / 100;
      this.setState({
        currentInput: "",
        actualOperation: resultado1 + resultado2
      });
    } else {
      this.setState({
        currentInput: ""
      });
      //por aqui esta el problema a solucionar del resultado
      this.checkForOperation(param);
    }
  };
  onClearClick = () => {
    this.setState({
      number: [0],
      currentInput: "",
      actualOperation: 0,
      simbolo: ""
    });
  };
  oneraseKey = () => {
    if (this.state.currentInput === "") {
      return;
    }
    let resultCurrent = this.state.currentInput;
    let conjunto = resultCurrent.split();
    let separado = [...(conjunto + "")];
    let menosUno = separado.pop();
    console.log(menosUno);
    console.log(separado);
    let juntodenuevo = separado.join("");
    this.setState({ currentInput: juntodenuevo });
  };
  onChangeSymbol = () => {
    if (this.state.actualOperation === 0) {
      return;
    } else if (this.state.simbolo !== "+") {
      this.setState({ simbolo: "+" });
    } else if (this.state.simbolo !== "-") {
      this.setState({ simbolo: "-" });
    }
  };
  onChangeMultiply = () => {
    if (this.state.actualOperation === 0) {
      return;
    } else if (this.state.simbolo !== "*") {
      this.setState({ simbolo: "*" });
    } else if (this.state.simbolo !== "÷") {
      this.setState({ simbolo: "÷" });
    }
  };
  onSquareRoot = () => {
    if (this.state.currentInput === "" && this.state.actualOperation !== 0) {
      let operateActualOperation = this.state.actualOperation;
      console.log(operateActualOperation);
      let operate = Math.sqrt(operateActualOperation).toFixed(3);
      this.setState({
        simbolo: "√",
        actualOperation: operate,
        currentInput: ""
      });
    } else {
      let numberToOperate = this.state.currentInput;
      let squareRoot = Math.sqrt(numberToOperate).toFixed(3);
      this.setState({
        simbolo: "√",
        actualOperation: squareRoot,
        currentInput: ""
      });
      console.log(Math.sqrt(numberToOperate));
    }
  };

  render() {
    return (
      <div className="cuerpoCalculadora">
        <div className="texto_nombre">Calculadora Cajiao</div>
        <div className="inputContainer">
          <div className="topInputContainer">
            <div className="currentOperation">{this.state.actualOperation}</div>
            <div className="operatorContainer">{this.state.simbolo}</div>
          </div>

          <InputPlace value={this.state.currentInput}>
            {this.state.currentInput} -{this.state.simbolo}
          </InputPlace>
        </div>
        <div className="texto_superior">Contabilidad</div>
        <div className="key_container">
          <div className="simbol_container2">
            <EraseKey onClearClick={this.oneraseKey} />
            <ClearData onClearClick={this.onClearClick} />
            <ResultKey
              symbol="="
              onResultClick={this.onResultClick}
              currentInput={this.state.currentInput}
            />
          </div>
          <div className="number_container">
            <NumberKey number={numbers[1]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[2]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[3]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[4]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[5]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[6]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[7]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[8]} onNumberClick={this.onNumberClick} />
            <NumberKey number={numbers[9]} onNumberClick={this.onNumberClick} />
            <Cero number={numbers[0]} onNumberClick={this.onNumberClick} />
          </div>
          <div className="simbol_container">
            <OperationKey
              symbol="÷"
              onSymbolClick={this.onSymbolClick}
              currentInput={this.state.currentInput}
            />

            <OperationKey
              symbol="*"
              onSymbolClick={this.onSymbolClick}
              currentInput={this.state.currentInput}
            />
            <OperationKey
              symbol="-"
              onSymbolClick={this.onSymbolClick}
              currentInput={this.state.currentInput}
            />
            <OperationKey
              symbol="+"
              onSymbolClick={this.onSymbolClick}
              currentInput={this.state.currentInput}
            />
          </div>
        </div>
        <div className="simbol_container_bottom">
          <NumberKey number="." onNumberClick={this.onNumberClick} />
          <ChangeSymbol onChangeSymbol={this.onChangeSymbol} />
          <RaizCuadrada onSquareRoot={this.onSquareRoot} />
          <ChangeMultiply onChangeMultiply={this.onChangeMultiply} />
        </div>
      </div>
    );
  }
}

export default App;
