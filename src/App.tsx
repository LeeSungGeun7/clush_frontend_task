import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
import TodoItem from './components/TodoItem';
import MainPage from './pages/MainPage';
import {
  RecoilRoot,

} from 'recoil'


function App() {
  return (
    <RecoilRoot>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/todo' element={<TodoItem isDone={false} title="dd" id={1} created_at={new Date('2024-01-02')}/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
  );
}

export default App;
