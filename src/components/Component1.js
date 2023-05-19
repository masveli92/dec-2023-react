import {count1Actions} from "../redux";
import {useDispatch} from "react-redux";

const Component1 = () => {
   const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.inc())}>incr</button>
            <button onClick={()=>dispatch(count1Actions.dec())}>decr</button>
            <button onClick={()=>dispatch(count1Actions.reset())}>reset</button>
        </div>
    );
};

export {Component1};