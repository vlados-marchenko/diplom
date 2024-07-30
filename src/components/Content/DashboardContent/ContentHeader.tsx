import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";
import "./ContentHeader.css";
import { SidebarData } from "../../SideBar/SidebarData";

const ContentHeader = () => {


  return (
    <div className="content--header">
      <h1 className="header--title">
        {SidebarData.map((val) => {
            if (val.link == window.location.pathname) {
                return (
                <div>{val.title}</div>
                );}
            })}
      </h1>

      <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder="Search anything here..." />
          <BiSearch className="icon" />
        </div>
        <div className="notify">
          <BiNotification className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
