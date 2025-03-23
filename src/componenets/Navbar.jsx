import React from 'react'
import Ham from "../assets/Ham.svg"
import Youtube from "../assets/Youtubelogo.svg"
import Search from "../assets/Search0.svg"
import Mic from "../assets/Mic.svg"
import Upload from "../assets/Upload.svg"
import Bell from "../assets/bellicon.svg"
import Profile from '../assets/Profile.jpg'
import { Link } from 'react-router-dom'
const Navbar = ({setexpand,expand}) => {
    return (
        <div className='flex justify-between items-center h-[60px] px-6 sticky top-0 bg-white w-full z-10 '>
            <div className='flex gap-6 items-center'>
                <div  onClick={()=>{setexpand(!expand)}} className='hidden custom-small:flex cursor-pointer  justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-gray-300 duration-300'>
                {console.log(expand)
                }
                <img  className=' cursor-pointer'  src={Ham} alt="" />
                </div>
                <Link to={"/"}>
                <img className='cursor-pointer' src={Youtube} alt="" />
                </Link>
                
            </div>
            <div className='flex items-center gap-4 w-[45%]'>

                <div className='flex gap-6 border-[0.2px] border-gray-400 h-[45px] px-4 w-[100%] items-center rounded-full'>
                    {/* <img src={Search} alt="" /> */}
                    <input className='w-full h-full outline-none bg-transparent border-r-[0.4px] border-gray-400' type="text" placeholder='Search' />

                    <img className='cursor-pointer ' src={Search} alt="" />
                </div>
                <div className='cursor-pointer w-[40px] px h-[40px] rounded-full flex justify-center items-center hover:bg-slate-300 duration-300'>
                    <img className='hidden md:block'  src={Mic} alt="Mic" />

                </div>
            </div>
            <div className='flex gap-4 items-center '>
                <img className='hidden md:block' src={Upload} alt="" />
                <img className='hidden md:block' src={Bell} alt="" />
                <img width={35} className='rounded-full' src={Profile} alt="" />
            </div>
        </div>
    )
}

export default Navbar