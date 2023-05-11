import Posts from "./components/posts/Posts";
import Launches from "./components/launches/Launches";
import Users from "./components/users/Users";
import {useState} from "react";

import './App.css';
import UserPosts from "./components/userPosts/UserPosts";

function App() {
    const [userId, setUserId] = useState(null);

  return (
    <div className={'container'}>
      {/*<Posts/>*/}
      {/*<Launches/>*/}
        <div className={'left'}>
            <Users setUserId = {setUserId} />
        </div>
        <div className={'right'}>
            {userId && <UserPosts userId = {userId}/>}

        </div>

    </div>
  );
}

export default App;
