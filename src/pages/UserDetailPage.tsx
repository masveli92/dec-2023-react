import {FC, useEffect, useState} from "react";
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from "../interfaces/user.interface";

import {UserDetail} from "../components/userDetail/UserDetail";
import {useParams} from "react-router-dom";
import {userService} from "../services/user.service";

const UserDetailPage:FC = () => {

    const{id} = useParams()
    const {state} = useAppLocation<IUser>();
    const[user, setUser] = useState<IUser>(null);

    useEffect( ()=>{
        if (!state){
            userService.getById(id).then(value => value.data).then(value => setUser(value));
        } else{
            setUser(state)
        }
    }, [id, state]);

    return (
        <div>
            {user&&<UserDetail user={user}/>}
        </div>
    );
};

export {UserDetailPage};