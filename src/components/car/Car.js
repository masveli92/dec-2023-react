import {useDispatch} from "react-redux";

import {carAction} from "../../redux";


const Car = ({car}) => {
    const {id,brand,year,price} = car;

    const dispatch = useDispatch();

    const deleteCar = async ()=>{
        await dispatch(carAction.deleteCar({id}))
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carAction.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};
