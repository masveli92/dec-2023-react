import {useState} from "react";

const IncrementDecrement = () => {

    let [counter, setCounter] = useState(0);

    const onClickIncrement = () => {
        console.log('increment');
        setCounter(++counter);
    };

    const onClickDecrement = ()=> {
        console.log('decrement');
        setCounter(--counter);
    };

    return (
        <div>
           <h2> value -> {counter}</h2>
            <button onClick={onClickIncrement}> increment </button>
            <button onClick={onClickDecrement}> decrement </button>
        </div>
    );
};

export {IncrementDecrement};