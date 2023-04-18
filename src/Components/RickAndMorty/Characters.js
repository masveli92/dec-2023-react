import {rickAndMorty} from "../../data";
import {Character} from "./Character";

const Characters = () => {
    return (
        <div>
            {rickAndMorty.map (value => (
                <Character key = {value.id} character = {value}/>))}
        </div>
    );
};

export {Characters};