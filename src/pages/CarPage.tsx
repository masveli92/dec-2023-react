import {FC, useEffect, useState} from "react";

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {CarForm} from "../components/carForm/CarForm";
import {Cars} from "../components/cars/Cars";

interface IProps {

}

const CarPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<boolean>(false);
    const [carForUpdate, setCarForUpdate] = useState<ICar|null>(null);


    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars]);

    return (
        <div>
             <CarForm setAllCars={setAllCars} carForUpdate = {carForUpdate} setCarForUpdate = {setCarForUpdate}/>
             <hr/>
             <Cars cars = {cars} setCarForUpdate = {setCarForUpdate} setAllCars={setAllCars}/>
        </div>
    );
};

export {CarPage};