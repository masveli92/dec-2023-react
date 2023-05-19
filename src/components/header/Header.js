import {useNavigate} from "react-router-dom"

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <button className={css.btn} onClick={()=> navigate('todos')}>Todos</button>
            <button className={css.btn} onClick={()=> navigate('albums')}>Albums</button>
            <button className={css.btn} onClick={()=> navigate('comments')}>Comments</button>
        </div>
    );
};

export {Header};