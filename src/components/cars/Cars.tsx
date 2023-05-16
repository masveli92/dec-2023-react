import {FC, useEffect, useState} from "react";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";
import {IUseState} from "../../types/useState.type";

interface IProps {
    cars:ICar[];
    setCarForUpdate:IUseState <ICar|null>
    setAllCars: IUseState<boolean>
}

const Cars:FC<IProps> = ({cars, setCarForUpdate, setAllCars}) => {

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setAllCars = {setAllCars}/>)}
        </div>
    );
};

export {Cars};