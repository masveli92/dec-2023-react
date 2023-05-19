import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CharactersPage} from "./pages";

function App() {
  return (
    <Routes>
     <Route path={'/'} element={<MainLayout/>}>
         <Route index element={<Navigate to={'characters'}/> }/>
         <Route path={'characters'} element={<CharactersPage/>}/>
     </Route>
    </Routes>
  );
}

export default App;
