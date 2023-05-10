import {useState} from "react";
import './App.css'
import {IncrementDecrement} from "./components/incrementDecrement/IncrementDecrement";
import Comments from "./components/comments/Comments";
import FullComment from "./components/fullComment/FullComment";


function App() {

    let [chosenComment, setChosenComment] = useState(null);

    const lift = (obj) => {
      setChosenComment({...obj})
    }

  return (
    <div className={'container'}>
      {/*<IncrementDecrement/>*/}
        <div className={'leftSide'}>
            <Comments lift ={lift}/>
        </div>
        {
            chosenComment&&
            (<div className={'rightSide'}>
                <FullComment value ={chosenComment}/>
            </div>)
        }

    </div>
  );
}

export default App;
