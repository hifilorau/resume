import React from 'react'
import CalcNumber from '../CalcNumber';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenDisplay: "",
            auxillaryNumber: "",
            baseNumber: ""
        }
    }

    handleCalcButtonClick = (x) => {
        let display = this.state.screenDisplay;
        display += x;
        this.setState({screenDisplay: display})
    }
 
   clearDisplay() {
       this.setState({
           screenDisplay: ''
       })
   }

   addNumbers() {
    const baseNumber = this.state.screenDisplay;
    this.setState({
        baseNumber:baseNumber, 
        screenDisplay: "",
        arithmetic: 'add'
    }, () => {
        console.log(this.state.baseNumber);
    })
   }

   solve() {
    const arithmetic = this.state.arithmetic
    const base = Number(this.state.baseNumber);
    const newNumber = Number(this.state.screenDisplay);
     if (arithmetic === 'add') {
        this.setState({
            screenDisplay: base + newNumber
        })
     }
   }

   

    render(){
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const numberList = numberArray.map((num) => {
            // console.log(index)
            return (
            <CalcNumber value={ num } key={num} handleButtonClick={this.handleCalcButtonClick}/>
            )})
        return (
            <div className="calculator">
                <div className="screen">{this.state.screenDisplay}</div>
                <div className="solve" onClick={() => this.solve()}>Solve</div>
                <div className="all-clear calc-button" onClick={() => this.clearDisplay()}>AC</div>
                <ul className="number-list">{numberList}</ul>
                <div className="add calc-button" onClick={() => this.addNumbers()}>+</div>
                <div className="subtract calc-button">-</div>
                <div className="multiply calc-button">X</div>
                <div className="divide calc-button">/</div>
                <div className="decimal calc-button">.</div>
            </div>
        )
    }
}

export default Calculator