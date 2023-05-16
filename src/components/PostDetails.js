import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const PostDetails = () => {

   let {id} = useParams();

   const [post, setPost] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+ id.toString())
                .then(value => value.json())
                .then(value => {
                    setPost({...value})
                });
    },[id])

    return (
        <div>
            {post&&
                <div><div> user Id: {post.userId}</div>
                <div> post Id: {post.id}</div>
                <div> title: {post.title}</div>
                <div> body: {post.body}</div></div>
            }
            <hr/>


        </div>
    );
};

export default PostDetails;