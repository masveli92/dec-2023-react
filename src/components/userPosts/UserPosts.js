import {useEffect, useState} from "react";
import axios from 'axios';
import UserPost from "../userPost/UserPost";
const UserPosts = ({userId}) => {

    let [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{


        axios (`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.data)
            .then(value => setUserPosts([...value]) )
    },[userId])
    return (
        <div>
            {userPosts.map(value => <UserPost userPost = {value} key = {value.id}/>)}
        </div>
    );
};

export default UserPosts;