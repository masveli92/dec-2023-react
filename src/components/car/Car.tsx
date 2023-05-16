import {FC} from "react";
import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";

interface IProps{
    car:ICar
    setCarForUpdate: IUseState<ICar|null>
    setAllCars: IUseState<boolean>
}

const Car:FC<IProps>  = ({car, setCarForUpdate, setAllCars}) => {
    const {id,brand,year,price} = car

    const deleteCar = async () => {
        await carService.delete(id);
        setAllCars (prevState =>! prevState)
    };

    return (
        <div>
            <div>id : {id} </div>
            <div>brand : {brand} </div>
            <div>year : {year} </div>
            <div>price : {price} </div>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <button onClick={()=> deleteCar()}> delete</button>
            <hr/>
        </div>
    );
};

export {Car}