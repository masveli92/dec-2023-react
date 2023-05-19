import {FC} from "react";
import {IUser} from "../../interfaces/user.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    user:IUser
}

const User:FC<IProps> = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(`${id}`,{state: {...user}})}> User  details</button>
        </div>
    );
};

export {User};