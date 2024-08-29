import './App.css';
import {Routes, Route} from 'react-router-dom'
import { LoginPage, Register , BoardList, BoardDetail } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/boardList' element={<BoardList/> }/>
        <Route path='/board/:idx' element={<BoardDetail/> }/>
      </Routes>
    </div>
  );
}

export default App;
