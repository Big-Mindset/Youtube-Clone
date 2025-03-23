import React, { useEffect, useState } from 'react'
import thumb1 from "../assets/assets/thumbnail1.png"
import { APi_KEY, convertor } from '../data'
import { Link } from 'react-router-dom'
const Sidevidoes = ({categoryId}) => {
  const [Recommended, setRecommended] = useState([])

  let data = async()=>{
    let Api = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=US&videoCategoryId=${categoryId}&key=${APi_KEY}`
    let res = await fetch(Api)
    let resp = await res.json()
    setRecommended(resp.items || [])
    
  }
  useEffect(() => {
    data()
    if (Recommended.length >0){
      console.log(Recommended);
      
    }
  }, [])
  return (
    <div className="side-images xl:w-[45%] w-[100%] flex flex-col gap-5 items-center">
    {Recommended ? Recommended.map((item,idx)=>{

           return ( <Link to={`/video/:${item.snippet.categoryId}/${item.id}`} className='flex'> <div key={idx} className='w-[70%] rounded'>
            <img className='object-rounded w-[100%]'   src={item.snippet.thumbnails.medium.url} alt="" />

            </div>
            <div className="info flex   w-[70%]">
              <div className='flex flex-col mx-3 w-[85%] gap-2'>

                <h2 className='text-[20px] font-bold'>{item.snippet.title}</h2>
                <p>{item.snippet.channelTitle}</p>
                <p>{convertor(item.statistics.viewCount)} views</p>
              </div>
            </div></Link>)
          }) : console.log("Some Problem")
          }
            </div>

  )
}

export default Sidevidoes