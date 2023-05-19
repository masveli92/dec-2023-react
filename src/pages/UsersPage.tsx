import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Users} from "../components/users/Users";

interface IProps {

}
const UsersPage:FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
           <Users/>
        </div>
    );
};

export {UsersPage};