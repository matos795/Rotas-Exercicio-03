import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeIndex from './routes/Home/HomeIndex'
import Promocao from './routes/Home/Promocao'
import Inscricao from './routes/Home/Inscricao'


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='home' element={<HomeIndex />} />
            <Route path='promocao' element={<Promocao />} />
            <Route path='inscricao' element={<Inscricao />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
