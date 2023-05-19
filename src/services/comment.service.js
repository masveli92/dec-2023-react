import {placeHolderAxiosService} from "./axios.service";
import {urls} from "../constants";

const commentService ={
    getAll:()=>placeHolderAxiosService.get(urls.comments),
    create:(comment)=>placeHolderAxiosService.post(urls.comments, comment)
}

export {
    commentService
}