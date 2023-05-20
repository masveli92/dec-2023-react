import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carsService} from "../../services";
import {carAction} from "../../redux";
import {Car} from "../car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(()=>{
        carsService.getAll().then(value => value.data).then(value => dispatch(carAction.setAll(value)))
    },[dispatch, trigger])


    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
