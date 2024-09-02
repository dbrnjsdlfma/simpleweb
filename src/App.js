import './App.css';
import {Routes, Route} from 'react-router-dom'
import { LoginPage, Register, SearchPW, BoardList, BoardDetail, BoardWrite } from './pages'

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
      </Routes>
    </div>
  );
}

export default App;
