import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home/Home'
import Video from './componenets/video/Video'
import { Routes , Route } from 'react-router-dom'
function App() {
  const [expand, setexpand] = useState(false)
  return (
    <>

      <Navbar setexpand={setexpand} expand={expand}/>
      <Routes>
        <Route path="/" element={<Home setexpand={setexpand} expand={expand}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App
