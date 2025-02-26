import React from "react"
import { ACTIONS } from "../App.js"

export default function OperatorButton({ dispatch, operator }) {

    return <button className='button' onClick={
        () => dispatch({
        type: ACTIONS.CHOOSE_OPERATION,
        payload: {
            operator: operator
        }
    })}>{operator}</button>
}