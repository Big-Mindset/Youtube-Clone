import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { APi_KEY } from '../data'
import { convertor } from '../data'
const main = ({cetegory}) => {
    
    const [data, setdata] = useState([])

    let ft_data = async()=>{
        let dat = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=US&videoCategoryId=${cetegory}&key=${APi_KEY}`
        let res = await fetch(dat)
        let response = await res.json()
        console.log(response.items);
        
       setdata(response.items);
        
    }
    useEffect(() => {
        ft_data()
        
    }, [cetegory])
  return (
    <div className=' gridd w-[82vw]' >
        {data.map((item,index)=>{

            return <Link key={index}  to={`video/${item.snippet.categoryId}/${item.id}`}>
            <img  className='rounded' src={item.snippet.thumbnails.standard.url} alt="" />
            <p className='font-semibold'>{item.snippet.title}</p>
            <p className='text-[14px]'>{item.snippet.channelTitle}</p>
            <div className='flex gap-4 items-center'>
                <p className='text-[14px]'>{convertor(item.statistics.viewCount)} views</p>
                <p className='text-[14px]'>{moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
        </Link>
        })}
    </div>
  )
}

export default main