import React, { useState } from 'react';
import {MenuItems} from "./menuitems3";
import { Link } from "react-router-dom";
import "../dropdown.css"; 

function Dropdown3(){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    function forzarRecarga(x,y){
        if (x===y) {
            window.location.reload();
        }
    }
    return(
        <>
            <ul id="dropdownN" onClick={handleClick}
            className={click? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {MenuItems.map((item,index) => {
                    return(
                        <li id="dropdownNa" key={index}>
                            <Link
                            className={item.cName}
                            to={item.url}
                            onClick={()=>{setClick(false);forzarRecarga(item.url,window.location.pathname)}}                     
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default Dropdown3;