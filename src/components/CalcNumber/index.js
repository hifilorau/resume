import React from 'react';

const CalcNumber = (props) => (
 <div className="calc-number calc-button" onClick={() => props.handleButtonClick(props.value)}>
     {props.value}
 </div>
)


export default CalcNumber;