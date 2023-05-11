import {useEffect, useState} from "react";
import axios from 'axios';

import Post from "../post/Post";

const Posts = () => {

    let [posts, setPosts] = useState([]);
    let [chosenPost, setChosenPost] = useState(null);


    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.data)
            .then(posts => setPosts ([...posts]));
    }, []);

    return (
        <div>
            { chosenPost &&
                <div>
                <div> user id: {chosenPost.userId} </div>
                    <div> post id: {chosenPost.id}</div>
                    <div> title: {chosenPost.title}</div>
                <div> body: {chosenPost.body}</div><hr/>
                </div>
            }
            { posts.map(value => <Post post = {value} key = {value.id} setPost = {setChosenPost}/>)}
        </div>
    );
};

export default Posts


