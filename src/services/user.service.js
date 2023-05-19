import {placeHolderAxiosService} from "./axios.service";
import {urls} from "../constants";

const userService ={
    getAll:()=>placeHolderAxiosService.get(urls.users),
    create:(user)=>placeHolderAxiosService.post(urls.users, user)
}

export {
    userService
}