import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Main from "../main"
const Home = ({expand,setexpand}) => {
  const [cetegory, setcetegory] = useState(0)
  
  return (
    <>
    <Sidebar expand={expand} setexpand={setexpand} cetegory={cetegory} setcetegory={setcetegory}/>
    <div className={`container  ${expand ? "" : "large-side"}`}>
        <Main cetegory={cetegory}/>
    </div>
    </>
  )
}

export default Home