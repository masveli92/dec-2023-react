import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/todosPage/TodosPage";
import {CommentsPage} from "./pages/commentsPage/CommentsPage";
import {AlbumsPage} from "./pages/albumsPage/AlbumsPage";
import {Post} from "./components/post/Post";


function App() {
  return (
    <Routes>
      <Route path = {'/'} element = {<MainLayout/>}>
          <Route index element = {<Navigate to={'todos'}/>}/>
          <Route path = {'/todos'} element={<TodosPage/>}/>
          <Route path = {'/albums'} element={<AlbumsPage/>}/>
          <Route path = {'/comments'} element ={<CommentsPage/>}>
              <Route path = {':postId'} element = {<Post/>} />
          </Route>

      </Route>
    </Routes>
  );
}

export default App;
