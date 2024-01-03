import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { MdOutlineHome, MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoLight, PiVideoFill } from "react-icons/pi";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import './sidebar.css'
import Avatar from 'react-avatar';

const Sidebar = ({menu}) => {
    return (
        <div className='sidebar' id={menu}>
            <ul className='menu-first'>
                <li>
                    <NavLink to='/'>
                        {
                            ({ isActive }) => (
                                <>
                                    {isActive ? <MdHome/> : <MdOutlineHome />}
                                    <span>Ev</span>
                                </>
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shorts'><SiYoutubeshorts /><span>Shorts</span></NavLink>
                </li>
                <li>
                    <NavLink to='/subscribes'>
                        {
                            ({ isActive }) => (
                                <>
                                    {isActive ? <PiVideoFill /> : <PiVideoLight />}
                                    <span>Abunəliklər</span>
                                </>
                            )
                        }
                    </NavLink>
                </li>
            </ul>
            <div className="line"></div>
            <ul className='menu-second'>
                <li>
                    <NavLink to='/special'><span>Siz</span><IoIosArrowForward size='17' /></NavLink>
                </li>
                <li>
                    <NavLink to='/account'>
                        {
                            ({ isActive }) => (
                                <>
                                    {isActive ? <FaUserAlt /> : <FiUser />}
                                    <span>Kanalınız</span>
                                </>
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/history'>
                        {
                            ({ isActive }) => (
                                <>
                                    {isActive ? <FaHistory /> : <GrHistory />}
                                    <span>Tarixçə</span>
                                </>
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/after'>
                        {
                            ({ isActive }) => (
                                <>
                                    {isActive ? <FaClock /> : <CiClock2 />}
                                    <span>Sonra izləyin</span>
                                </>
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/more'><IoIosArrowDown /><span>Daha Çox</span></NavLink>
                </li>
            </ul>
            <div className="line"></div>
            <div className="subscribes">
                <h4>Abunəliklər</h4>
                <div className="channel">
                    <Avatar src='./images/channel-1.jpg' round='100px' size='30'/>
                    <span>Dogan Kabak</span>
                </div>
                <div className="channel">
                    <Avatar src='./images/channel-2.jpg' round='100px' size='30'/>
                    <span>Noluyo Ya¿</span>
                </div>
                <div className="channel">
                    <Avatar src='./images/channel-3.jpg' round='100px' size='30'/>
                    <span>netd muzik</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
