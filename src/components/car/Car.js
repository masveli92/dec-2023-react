import {carService} from "../../services/car.service";

const Car = ({car, setCarForUpdate, setAllCars}) => {

    const {id, brand, price, year} = car

    const deleteCar = async () => {
        await carService.deleteById(id);
        setAllCars (prevState =>! prevState)
    };

    return (
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)} >update</button>
            <button onClick={()=> deleteCar() }>delete</button>
            <hr/>

        </div>
    );
};

export default Car;