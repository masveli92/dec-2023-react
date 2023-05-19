import {useDispatch} from "react-redux";
import {count2Actions} from "../redux";

const Component2 = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count2Actions.inc())}>incr</button>
            <button onClick={()=>dispatch(count2Actions.dec())}>decr</button>
            <button onClick={()=>dispatch(count2Actions.reset(25))}>reset</button>
        </div>
    );
};

export {Component2};