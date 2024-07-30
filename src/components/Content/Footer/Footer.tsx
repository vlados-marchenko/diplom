import React from "react";
import "./Footer.css";
import { BiLogoTelegram, BiLogoVk, BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <div className="footer">
            <Link to="/"><h1 className="footer_logo">Campus</h1></Link>
            <nav className="footer_navigation">
                <ul className="footer_navigation_list">
                    <li className="navigation_list_footer-item">
                        <Link to="/about_us">О НАС</Link>
                    </li>
                    <li className="navigation_list_footer-item">
                        <Link to="/courses">КУРСЫ</Link>
                    </li>
                    <li className="navigation_list_footer-item">
                        <Link to="/stuff">ПОЛЕЗНЫЙ СТАФФ</Link>
                    </li>
                </ul>
            </nav>
            <div className="footer_contacts">
                <p>Свяжитесь с нами</p>
                <ul className="footer_contacts_list">
                    <li className="footer_contacts-item">
                        <div className="telegram">
                            <Link to={""}><BiLogoTelegram className="iconF"/></Link>
                        </div>
                    </li>
                    <li className="footer_contacts-item">
                    <div className="vk">
                        <Link to={"https://vk.com/campus_academy"}><BiLogoVk className="iconF"/></Link>
                    </div>
                    </li>
                    <li className="footer_contacts-item">
                        <div className="whatsapp">
                            <Link to={""}><BiLogoWhatsapp className="iconF"/></Link>
                        </div>
                    </li>
                </ul>
            </div>
            <p className="rights_info">
                © 2024 - Campus. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;