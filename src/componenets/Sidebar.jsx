import React from 'react'
import Home from '../assets/assets/home.png'
import Gaming from '../assets/assets/game_icon.png'
import Automobiles from '../assets/assets/automobiles.png'
import Sports from '../assets/assets/sports.png'
import Entert from '../assets/assets/entertainment.png'
import Tech from '../assets/assets/tech.png'
import Music from '../assets/assets/music.png'
import Blogs from '../assets/assets/blogs.png'
import News from '../assets/assets/news.png'
import Jack from "../assets/assets/Jack.png"
const Sidebar = ({expand,cetegory,setcetegory}) => {
    return (
        <div className={` hidden custom-small:block fixed top-0 pl-[1.6%]  pt-[30px] h-[100%] bg-white z-[5] ${expand ? "w-[15%]" : "Small"} `}>
            <div className='ImageDiv mb-[10%] py-[30px] '>
                <div  className={`cursor-pointer   ${cetegory===0 ? "active" : ""}`}  onClick={()=>setcetegory(0)}>
                    <img src={Home} />
                    <p>Home</p>
                </div>
                <div className={`cursor-pointer  ${cetegory===20 ? "active" : ""}`} onClick={()=>setcetegory(20)}>
                    <img src={Gaming} />
                    <p>Gaming</p>
                </div>
                <div className={`cursor-pointer  ${cetegory===26 ? "active" : ""}`} onClick={()=>setcetegory(26)}>
                    <img src={Automobiles} />
                    <p>Style</p>
                </div>
                <div className={`cursor-pointer  ${cetegory===17 ? "active" : ""}`} onClick={()=>setcetegory(17)}>
                    <img src={Sports} />
                    <p>Sports</p>
                </div>
                <div className={`cursor-pointer  ${cetegory===24 ? "active" : ""}`} onClick={()=>setcetegory(24)}>
                    <img src={Entert} />
                    <p>Entertainment</p>
                </div>
                <div className={`cursor-pointer  ${cetegory===28 ? "active" : ""}`} onClick={()=>setcetegory(28)}>
                    <img src={Tech} />
                    <p>Technology</p>
                </div>
                <div className={`cursor-pointer ${cetegory===10 ? "active" : ""}`} onClick={()=>setcetegory(10)}>
                    <img src={Music} />
                    <p>Music</p>
                </div>
                <div className={`cursor-pointer ${cetegory===22 ? "active" : ""}`} onClick={()=>setcetegory(22)}>
                    <img src={Blogs} />
                    <p>Blogs</p>
                </div>
                <div className={`cursor-pointer ${cetegory===25 ? "active" : ""}`} onClick={()=>setcetegory(25)}>
                    <img src={News} />
                    <p>News</p>
                </div>

            <hr className='border-[0.5px] border-black'/>
            </div>
            <div className='Images'>
                <p>Subscribed</p>
                <div>
       
                <img src={Jack} alt="" />
                <p>Mr Beast</p>

                </div>
                <div>
          
                <img src={Jack} alt="" />
                <p>GreatStack</p>

                </div>
                <div>
   
                <img src={Jack} alt="" />
                <p>CodeWithHarry</p>

                </div>
                <div>
   
                <img src={Jack} alt="" />
                <p>Dhruv Rathee</p>

                </div>
                <div>
         
                <img src={Jack} alt="" />
                <p>Carryminati</p>

                </div>
                <div>

                <img src={Jack} alt="" />
                <p>Nafty 3D</p>

                </div>
                <div>

                <img src={Jack} alt="" />
                <p>Trigerred insan</p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar