import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Aula1 from './pages/Aula1';
import Aula2 from './pages/Aula2';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aula1' element={<Aula1 />} />
          <Route path='/aula2' element={<Aula2 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App