import {simpsons} from "../../data";
import {Simpson} from "./Simpson";

const Simpsons = () => {
    return (
        <div>
            {
                simpsons.map(value => (
                    <Simpson simpson = {value} key ={value.id}/>))
            }
        </div>
    );
};

export {Simpsons};