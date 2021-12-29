import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import {universalButtonType} from "./App";

type universalButtonTypes = {
    callBack: () => void
    type: universalButtonType;
    disabled: boolean

}
let buttonName: universalButtonType;
let disabledButton = false;
export const UniversalButton = (props: universalButtonTypes) => {
    const callBack = () => props.callBack();
    return (
        <button disabled={props.disabled}
                onClick={callBack}>{props.type}</button>
    )
}
