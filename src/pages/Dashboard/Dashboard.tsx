import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../components/SideBar/Sidebar";
import Content from "../../components/Content/DashboardContent/content/Content";
import Profile from "../../components/Content/DashboardContent/ProfileSmallCard/Profile";
import PersonalLayout from "../../layouts/PersonalLayout/PersonalLayout";
import ContentHeader from "../../components/Content/DashboardContent/ContentHeader";

const Dashboard = () => {
    return (
      <PersonalLayout>
       
      </PersonalLayout>
        // <div className="dashboard">
        //   <Sidebar />
        //   <div className="dashboard--content">
        //     <Content />
        //     <Profile />
        //   </div>
        // </div>
    )
}

export default Dashboard;