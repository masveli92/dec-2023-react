import {useEffect, useState} from "react";
import axios from "axios";

import User from "../user/User";

const Users = ({setUserId}) => {
    let [users, setUsers] = useState([]);

    useEffect( ()=> {
        axios ('https://jsonplaceholder.typicode.com/users')
            .then(value => value.data)
            .then(users => setUsers([...users]));
    }, [])

    return (
        <div>
            {users.map(value => <User user = {value} key = {value.id} setUserId={setUserId}/>)}
        </div>
    );
};

export default Users;