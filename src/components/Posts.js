import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import Post from "./Post";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            });
    }, []);
    return (
        <div>
            <div>
                <h4>post details view</h4>
                <Outlet/>
            </div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;