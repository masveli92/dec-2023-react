import css from "./Header.module.css"
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={css.header}>
            <button onClick={()=>navigate('cars')}> Cars </button>
        </div>
    );
};

export {Header};