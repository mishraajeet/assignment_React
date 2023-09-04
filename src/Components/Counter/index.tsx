import React, { useState } from "react";
import "./counter.css"

export const Counter = () => {
    const [counts, setCounts] = useState<number>(0)

    const onIncrement = () => {
        setCounts(prevState => prevState + 1)
    }
    return (
        <div className="counter-container">
            <div className="counter-box">
                <p>Count: {counts}</p>
                <div className="counter-buttons-container">
                    <button className="increment-btn" onClick={onIncrement}>Increment</button>
                    <button className="reset" onClick={() => setCounts(0)}>Reset</button>
                    <CounterChild text="Child" onIncrement={onIncrement} />
                </div>
            </div>
        </div>
    )
}

type CounterChildProps = {
    text: string,
    onIncrement: () => void
}

export const CounterChild = ({ text, onIncrement }: CounterChildProps) => {
    return (
        <button onClick={onIncrement}>{text}</button>
    )
}