import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <h2>sub page menu</h2>
                <ol>
                    <li><Link to={'users'}>user page</Link> </li>
                    <li><Link to={'posts'}>post page</Link> </li>
                    <li><Link to={'comment'}>comment page</Link> </li>
                </ol>
                <div>
                    <h4>sub view</h4>
                   <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {Layout};