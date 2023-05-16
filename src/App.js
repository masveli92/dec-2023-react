import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Layout} from "./components/Layout";
import {About} from "./components/About";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UserDetails from "./components/UserDetails";
import PostDetails from "./components/PostDetails";

function App() {
    return (
        <div>
            <div>
                <h2> Menu</h2>
                <ul>
                    <li><Link to={'/'}>home </Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}> about</Link></li>
                </ul>
            </div>
            <div>
              <h3> view </h3>
                <Routes>
                    <Route path={'/'} element = {<Home/>}/>
                    <Route path={'/layout'} element = {<Layout/>}>
                        <Route path={'users'} element = {<Users/>}>
                            <Route path ={':id'} element = {<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element = {<Posts/>}>
                            <Route path = {':id'} element =  {<PostDetails/>}/>
                        </Route>
                    </Route>
                    <Route path={'/about'} element = { <About/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
