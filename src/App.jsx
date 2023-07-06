import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Aula1 from './pages/Aula1';
import Aula2 from './pages/Aula2';
import { useState } from 'react';

function App() {
  const [right, setRight] = useState([])
  const [wrong, setWrong] = useState([])
  const [answered, setAnswered] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aula1' element={<Aula1 right={right} setRight={setRight} wrong={wrong} setWrong={setWrong} answered={answered} setAnswered={setAnswered}/>} />
          <Route path='/aula2' element={<Aula2 right={right} setRight={setRight} wrong={wrong} setWrong={setWrong} answered={answered} setAnswered={setAnswered}/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App