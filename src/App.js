import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, CommentPage, UsersPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path = {'/'} element ={<MainLayout/> }>
          <Route index element={<Navigate to={'users'}/>} />
          <Route path = {'users'} element ={<UsersPage/>}/>
          <Route path = {'comments'} element ={<CommentPage/>}/>
          <Route path = {'cars'} element ={<CarsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
