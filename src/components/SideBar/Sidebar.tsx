import React from "react";
import { BiBookAlt, BiHome, BiSolidCalendar, BiSolidPhotoAlbum, BiChat } from 'react-icons/bi';
import "./sidebar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

// import logo from "../../assets/logo.svg";


const Sidebar = () => {
    return (
    <div className="sidebar_menu">
        <div className="logo-dash">
            <BiBookAlt className="logo-icon-dash"/>
            <h2><Link to={"/"}>Campus</Link></h2>
        </div>

        <ul className="sidebar_menu--list">
            {SidebarData.map((val, key) => {
                return (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                            <div className="title_menu_sidebar">{val.title}</div>
                    </li>
                )
            })}
            {/* <a href="/dashboard" className="item">
                <BiHome className="icon"/>
                Dashboard
            </a>
            <a href="/profile" className="item">
                <BiSolidPhotoAlbum className="icon"/>
                Profile
            </a>
            <a href="/schedule" className="item">
                <BiSolidCalendar className="icon"/>
                Schedule
            </a>
            <a href="/chats" className="item">
                <BiChat className="icon"/>
                Chats
            </a> */}
        </ul>
    </div>
    )
};

export default Sidebar;