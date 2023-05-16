import {useLocation} from "react-router-dom";

const UserDetails = () => {
    let {state} = useLocation();
    console.log(state)
    return (
        <div>
           <div> user Id: {state.id}</div>
           <div> nickname: {state.username}</div>
           <div> user name: {state.name}</div>
           <div> email: {state.email}</div>
        </div>
    );
};

export default UserDetails;