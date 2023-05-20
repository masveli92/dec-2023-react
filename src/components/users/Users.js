import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userAction} from "../../redux";
import {User} from "../user/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(()=> {
        userService.getAll().then(value => value.data).then(value => dispatch(userAction.setAll(value)))
    },[dispatch])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export {Users};