import React from "react";

type CounterNumberTypes = {
    currentValue: number
    maxValue: number
}
export const CounterNumber = (props: CounterNumberTypes) => {
    return (
        <div className={props.currentValue === props.maxValue ? "red counter__number" : "counter__number"}>
            {props.currentValue}
        </div>
    )
}
