import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {charactersService} from "../../services";
import {charactersActions} from "../../redux";
import {Character} from "../character/Character";
import {useSearchParams} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const [query, setQuery] = useSearchParams();

    useEffect( () =>{
        setQuery(prev => ({ ...prev, page:'1'}))
    },[])

    useEffect(()=>{
        charactersService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(charactersActions.setCharacters(value)))
    }, [query])
    return (
        <div>
            {characters.map (character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export {Characters};