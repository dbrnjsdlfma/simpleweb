import './App.css';
import {Routes, Route} from 'react-router-dom'
import { LoginPage, Register, SearchPW } from './pages'
import { BoardList, BoardDetail, BoardWrite, BoardAlter } from './pages/Board'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/searchPW' element={<SearchPW/>}/>
        <Route path='/boardList' element={<BoardList/> }/>
        <Route path='/board/:idx' element={<BoardDetail/> }/>
        <Route path='/boardWrite' element={<BoardWrite/> }/>
        <Route path='/boardAlter/:idx' element={<BoardAlter/>}/>
      </Routes>
    </div>
  );
}

export default App;
