import React from 'react'
import Calculator from '../../components/Calculator'

class CalculatorPage extends React.Component {

    render(){
        return (
            <div className="calculator-container">
                Calculator goes here
                <Calculator />
            </div>
        )
    }
}

export default CalculatorPage