import {carsAxiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll:()=>carsAxiosService.get(urls.cars.cars),
    create:(car)=>carsAxiosService.post(urls.cars.cars, car),
    updateById:(id, car)=>carsAxiosService.put(urls.cars.byId(id), car),
    delete:(id)=>carsAxiosService.delete(urls.cars.byId(id))
}
export {
    carsService
}