import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import ContactPage from './pages/kontak'
import Aboutpage from './pages/aboutpage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/kontak' element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
