const FullComment = ({value}) => {
    return (
        <div>
            postId - {value.postId} <br/>
            name - {value.name} <br/>
            email - {value.email} <br/>
            {value.body}
        </div>
    );
};

export default FullComment;