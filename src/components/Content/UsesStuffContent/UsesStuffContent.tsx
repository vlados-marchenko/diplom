import React from "react";
import "./UsesStuffContent.css";
import { BiSearch } from "react-icons/bi";

import useful_stuff from "../../../assets/useful_stuff.jpg";

const UsesStuffContent = () => {
    return (
        <div className="useful_stuff_main">
            <div className="search_useful_stuff">
                <input type="text" placeholder="Search anything here..."/>
                <BiSearch className="icon-us"/>
            </div>
            <div className="switcher">
                <select>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="german">German</option>
                </select>
            </div>

            <div className="stuff_list">
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
                <div className="stuff_list-item">
                    <img src={useful_stuff} alt="usefull stuff img" className="useful_stuff_img"/>
                    <h2>Name of super usefull stuff</h2>
                    <h5>some another usefull text</h5>
                    <p>Cras lacinia erat eu fermentum iaculis. Proin libero lectus, condimentum quis lectus at, accumsan pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu sem tincidunt, vehicula mi a, condimentum elit. Nam eu semper neque, quis pharetra libero.</p>
                </div>
            </div>
        </div>
    )
}

export default UsesStuffContent;