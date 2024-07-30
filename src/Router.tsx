import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import Profile from "./pages/Profile/Profile";
import { ScrollToTop } from "./components/Content/Footer/Footer";





function Router(): JSX.Element {
    return (
      <BrowserRouter>
        {/* <ScrollToTop /> */}
      </BrowserRouter>
    );
}
  
export default Router;