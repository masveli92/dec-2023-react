import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
            <h4>user details</h4>
            <Outlet/>
        </div>)
}

export default Users