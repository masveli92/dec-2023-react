import {Outlet} from "react-router-dom";

import {Header} from "../components/header/Header";
import css from "./MainLayout.module.css"



const MainLayout = () => {
    return (
        <div className={css.main}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};