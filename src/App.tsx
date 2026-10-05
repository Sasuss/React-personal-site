import Homepage from './Homepage'
import Bakingshrek from './pages/Bakingshrek'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<Bakingshrek/>} path='/Bakingshrek'/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
