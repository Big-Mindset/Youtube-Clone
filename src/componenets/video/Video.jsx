import React from 'react'
import Play from "../Playvideo"
import Sidevidoes from '../Sidevidoes'
import { useParams } from 'react-router-dom'
const Video = () => {
  let {videoId,categoryId} = useParams()
  
  return (
    <div className='flex flex-col xl:flex-row  xl:py-[10px] xl:px-[3%] p-[1%] gap-5 '>
       <Play videoId={videoId}/> 
       <Sidevidoes categoryId={categoryId}/>
    </div>
  )
}

export default Video