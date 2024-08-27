import { useState } from 'react'
import './App.css'
import Result from "./components/Result.jsx"
import { Routes, Route, useLocation } from 'react-router-dom';
import Input from "./components/Input.jsx"
import BarCode from "./components/BarCode.jsx"
import Navbar from "./components/Navbar.jsx"
import Contactme from "./components/Contactme.jsx"
import Manual from "./components/Manual.jsx"
function App() {
  const location = useLocation();
  return (
    < >
     <Navbar/>
    {location.pathname !== '/Contact_me' && <Input />&&location.pathname !== '/Manual' && <Input />}
    <Routes>
        <Route path="/Manual" element={<Manual />} />
        <Route path="/Contact_me" element={<Contactme />} />
      </Routes>
    </>
  )
}

export default App
