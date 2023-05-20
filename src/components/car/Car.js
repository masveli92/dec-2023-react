import {useDispatch} from "react-redux";
import {carAction} from "../../redux";
import {carsService} from "../../services";

const Car = ({car}) => {
    const {id,brand,year,price} = car;
    const dispatch = useDispatch();

    const deleteCar = async ()=>{
        await carsService.delete(id);
        dispatch(carAction.changeTrigger())
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
