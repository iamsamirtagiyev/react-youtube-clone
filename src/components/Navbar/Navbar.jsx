import React, {useRef} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdMic, MdNotListedLocation } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="left-side">
        <RxHamburgerMenu className='menu-icon' size='50'/>
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
          <span>YouTube</span>
        </div>
      </div>
      <div className="right-side">
        <div className="search-box">
          <div className="search">
            <IoIosSearch className='search-icon' />
            <input type="text" placeholder='Axtarın'/>
          </div>
          <IoIosSearch className='search-icon' size='42' />
          <MdMic className='mic-icon' size='42'/>
        </div>
        <div className="icons">
          <RiVideoAddLine className='video-icon' size='45'/>
          <IoMdNotificationsOutline className='notification-icon' size='45'/>
          <Avatar className='avatar' size='40' round="100px" src='./images/my-logo.png'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
