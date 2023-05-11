const UserPost = ({userPost,setUserId }) => {
    let {userId, id, title, body} = userPost
    return (
        <div>
            <div>post id: {id} </div>
            <div>wrote by user id: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <br/>
        </div>
    );
};

export default UserPost;