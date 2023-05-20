import axios from "axios";
import {carsApi} from "../constants";

const carsAxiosService = axios.create({baseURL:carsApi});

export {
    carsAxiosService
}