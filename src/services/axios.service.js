import axios from "axios";
import {carsApi, jsonPlaceHolderApi} from "../constants";

const placeHolderAxiosService = axios.create({baseURL:jsonPlaceHolderApi});
const carsAxiosService = axios.create({baseURL:carsApi});

export {
    placeHolderAxiosService,
    carsAxiosService
}