import {Outlet} from "react-router-dom";

import {Comments} from "../../components/comments/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>

            <Comments/>
        </div>
    );
};

export {CommentsPage};