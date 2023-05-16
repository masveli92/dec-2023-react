import {Link} from "react-router-dom";

const User = ({user}) => {

    return (
        <div>
            <Link to = {user.id.toString()} state = {{...user}}>
                {user.name}
            </Link>

        </div>
    );
};

export default User;