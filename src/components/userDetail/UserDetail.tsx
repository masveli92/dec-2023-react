import {FC} from "react";
import {IUser} from "../../interfaces/user.interface";

interface IProps {
    user:IUser
}

const UserDetail:FC<IProps> = ({user}) => {
    const {id, name, username, email}=user;
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
        </div>
    );
};

export {UserDetail};