const Comment = ({comment, lift}) => {
    const {id, postId, name, email, body} = comment
    return (
        <div>
        <p>
            id - {id} <br/>
            postId - {postId} <br/>
            name - {name} <br/>
            email - {email} <br/>
            <button onClick={()=>{
                lift(comment);
            }}>details</button>
        </p>

        </div>
    );
};

export default Comment;