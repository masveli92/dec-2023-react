const User = ({user, setUserId}) => {
    const {id, name, username, email}=user
    return (
        <div>
            <div> {id}. {username} </div>
            <div> name: {name}</div>
            <div> email: {email} </div>
            <button onClick={() => setUserId(id)}> show user posts </button>
            <button onClick={() => setUserId(null)}> hide user posts</button>
            <hr/>
        </div>
    );
};

export default User;