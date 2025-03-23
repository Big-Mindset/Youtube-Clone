import React, { useEffect, useState } from 'react'
import Video1 from "../assets/assets/video.mp4"
import save from "../assets/assets/save.png"
import Dislike from "../assets/assets/dislike.png"
import like from "../assets/assets/like.png"
import share from "../assets/assets/share.png"
import Profile from "../assets/assets/user_profile.jpg"
import { convertor } from '../data'
import { APi_KEY } from '../data'
import moment from 'moment'
const Playvideo = ({videoId}) => {
  let [Data, setData] = useState(null)
  let [Data2, setData2] = useState(null)
  let [Comments, setComments] = useState(null)
    let get_Data = async ()=>{
    let res =  ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${APi_KEY}`
    let res1 = await fetch(res)
    let response = await  res1.json()
    setData(response.items[0])
    
  }
  let channel_data = async()=>{
    let Key = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${Data.snippet.channelId}&key=${APi_KEY}`
    let Res = await fetch(Key)
    let js = await Res.json()
    setData2(js.items[0])

    // Comments
    let Key1 = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=200&videoId=${videoId}&key=${APi_KEY}`
    let ftt = await fetch(Key1)
    let resp = await ftt.json()
    setComments(resp.items)
    console.log(resp.items);
    
  }
  useEffect(() => {
    get_Data()
  }, [videoId])
  useEffect(() => {
    if (Data?.snippet.channelId){

      channel_data()
    }
  }, [Data])

  return (
    <div className='PlayVideo  xl:w-[60%] w-[100%]'>



          <div className=' w-[100%]'>

         <iframe className='w-[100%] h-[500px]' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
     
      <h2 className='text-xl my-2 font-bold'>{Data ? Data.snippet.title : ""}</h2>
        <div className='flex items-center justify-between'>
          <p className='text-[14px]'>{convertor(Data ? Data.statistics.viewCount : "")} views . {moment(Data2 ? Data2.snippet.publishedAt: "21Daysago").fromNow()}</p>
          <div className='flex gap-4 items-center video'>
            <span className='flex gap-2 items-center'><img src={like} alt="" />{convertor(Data ? Data.statistics.likeCount: "")}</span>
            <span><img src={Dislike} alt="" /></span>
            <span><img src={share} alt="" /></span>
            <span><img src={save} alt="" /></span>
          </div>
        </div>
        <hr className='border-[1px] border-black my-2'/> 
      <div className='flex gap-2 items-center justify-between  '>
        <div className='flex gap-2'>
        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full'>
          <img className='object-contain w-[40px] rounded-full' src={Data2?Data2.snippet.thumbnails.medium.url:{Profile}} alt="" />
        </div>
        <div>
          <h2  className='font-medium'>{Data ? Data.snippet.channelTitle : ""}</h2>
          <p className='text-[14px]'>{Data2 ? convertor(Data2?Data2.statistics.subscriberCount:"0") : ""} Subscriber</p>
        </div>
     

        </div>
        <div className='self-end button cursor-pointer bg-red-500 rounded-lg text-white px-6 py-2'>
          <p>Subscribe</p>
        </div>
      </div>
      <div className="description mx-16 my-5">
        <p>{Data ? Data.snippet.description.slice(0,250):""}</p>
      </div>
      <hr className='mx-16 border-[1px] border-black'/>
      <div className='Comment-Section mx-16 py-2 flex flex-col'>
        <p>{Data ? convertor(Data.statistics.commentCount): ""} Comments</p>
          {Comments? Comments.map((item,idx)=>{
            return(
        <div key={idx} className='py-5 flex flex-col gap-2'>

              <div className='flex  gap-4'>

            
           <img className='rounded-full w-[40px] h-[40px] items-center' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div className='flex gap-2 flex-col w-fit'>
          <p><span>{item.snippet.topLevelComment.snippet.authorDisplayName}</span> {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
          <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
          </div>
        
          </div>
          <div className='flex gap-5 items-center  px-14 py-2'>
            <span className='flex gap-2'><img className='w-[25px]' src={like} alt="" /> {convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
            <span><img className='w-[25px]' src={Dislike} alt="" /></span>
          </div>
        </div>
        )
    }): "This"}
      </div>
    </div>
  
      </div>
  )
}

export default Playvideo