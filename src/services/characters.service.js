import {axiosService} from "./axios.service";
import {urls} from "../constants";

const charactersService = {
    getAll:(page=1)=>axiosService.get(urls.characters, {params:{page}})
}

export {charactersService}