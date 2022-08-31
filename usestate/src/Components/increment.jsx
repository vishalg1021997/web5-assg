import React from "react";

const Increment = (props) => {
    const {value} = props

    const handelinc = () => {
        value()
    }
    return (
        <button onClick={handelinc}>increment</button>
        )
}

export {Increment}