import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

const Comments = ({lift}) => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(allComments => {
                    setComments (allComments);
                });
    }, []);

    return (
        <div>
            { comments.map(value => <Comment comment = {value} lift = {lift} key = {value.id}/>)}
        </div>
    );
};

export default Comments;