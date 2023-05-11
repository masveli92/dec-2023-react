const Post = ({post, setPost}) => {

const {id, title} = post
    return (
        <div>
           <div>post Id - {id}</div>
           <div>title - {title}</div>
           <button onClick={()=>setPost(post)}> post detail </button> <hr/>
        </div>
    );
};

export default Post;