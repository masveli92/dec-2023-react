import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentService} from "../../services";
import {commentAction} from "../../redux";

const CommentForm = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();

    const save = async (comment) =>{
       const{data} = await commentService.create(comment)
       dispatch(commentAction.create(data))
       reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type= "text" placeholder={"name"} {...register('name')} />
            <input type= "text" placeholder={"email"} {...register('email')} />
            <button>save</button>
        </form>
    );
};

export {CommentForm};