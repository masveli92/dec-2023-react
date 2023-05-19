import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.characters);
    const [, setQuery] = useSearchParams();

    const prev = ()=>{
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')-1}))
    };
    const next = ()=>{
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')+1}))
    };

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev page</button>
            <button disabled={!nextPage} onClick={next}>next page</button>
        </div>
    );
};

export {Pagination};
