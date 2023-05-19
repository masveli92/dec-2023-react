import {useState} from "react";
import {commentService} from "../../services/comment.service";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    useState(()=>{
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export {Comments};