import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {commentService} from "../../services";
import {commentAction} from "../../redux";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect( ()=>{
        commentService.getAll().then(value => value.data).then(value => dispatch(commentAction.setAll(value)))
    },[dispatch]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>) }
        </div>
    );
};

export {Comments};