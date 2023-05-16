import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    let navigate = useNavigate();
    return (
        <div>
            {post.id}. {post.title}
            <button onClick={()=>{ navigate(post.id.toString());
            }}> post details</button>
        </div>
    );
};

export default Post;