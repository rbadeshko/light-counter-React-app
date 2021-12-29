import React, {useState} from 'react';
import './App.css';
import {CounterNumber} from "./CounterNumber";
import {UniversalButton} from "./UniversalButton";


// Main Values
const maxValue: number = 5;

//Types
export type universalButtonType = 'Increase' | 'Reset';

function App() {
    const [count, setCount] = useState<number>(0);

    const increaseNumber = () => count < maxValue ? setCount(count + 1) : "";
    const resetNumber = () => count > 0 ? setCount(0) : "";

    let increaseDisable = count === maxValue;
    let resetDisable = count === 0;

    return (
        <div className="App">
            <div className="counter__wrap">

                <CounterNumber currentValue={count} maxValue={maxValue}/>
                <div className="counter__inc">
                    <UniversalButton type='Increase' disabled={increaseDisable} callBack={increaseNumber}/>
                </div>
                <div className="counter__reset">
                    <UniversalButton type='Reset' disabled={resetDisable} callBack={resetNumber}/>
                </div>
            </div>
        </div>
    );
}

export default App;
