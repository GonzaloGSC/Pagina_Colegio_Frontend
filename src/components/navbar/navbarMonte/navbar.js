import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Dropdown1 from "./dropdown1";
import Dropdown2 from "./dropdown2";
import Dropdown3 from "./dropdown3";
import "../navbar.css";


function Navbar(){
  const [click,setClick] = useState(false);
  const handleClick=()=>setClick(!click);
  const closeMovileMenu=()=>setClick(false);

  const [clickDropdown1,setClickDropdown1] = useState(false);
  const closeDropdown1=()=>setClickDropdown1(false);
  const handleClickDropdown1=()=>setClickDropdown1(!clickDropdown1);
 
  const [clickDropdown2,setClickDropdown2] = useState(false);
  const closeDropdown2=()=>setClickDropdown2(false);
  const handleClickDropdown2=()=>setClickDropdown2(!clickDropdown2);
  
  const [clickDropdown3,setClickDropdown3] = useState(false);
  const closeDropdown3=()=>setClickDropdown3(false);
  const handleClickDropdown3=()=>setClickDropdown3(!clickDropdown3);


  const [seguro1,setSeguro1] = useState(0);
  const [seguro2,setSeguro2] = useState(0);
  const [seguro3,setSeguro3] = useState(0);

 

  return(
    <nav className="NavbarContainer" id="NavbarContainerM">
        <nav className="NavbarItems">
          <div className="menu-icon" onClick={()=>{handleClick(); closeDropdown1(); closeDropdown2(); closeDropdown3()}}>
            <i className={click?"fas fa-times":"fas fa-bars"}/>
          </div>
          <ul id="NavbarContainerM" className={click?"nav-menu active":"nav-menu"}>
            <li  className="nav-item">
              <Link id="NavLinkM" to="/monte_carmelo" className="nav-links" onClick= {closeMovileMenu}>
                INICIO
              </Link>
            </li>


            <li className="nav-item"
              onMouseEnter= {() => {setSeguro1(1); closeDropdown2(); closeDropdown3()}}
              onMouseLeave= {() => setSeguro1(0)}
            >
              <div id="NavLinkM" className="nav-links-dropdown" onClick= {()=>{handleClickDropdown1(); closeDropdown2(); closeDropdown3()}}>
                NOSOTROS <i className="fas fa-caret-down" />
              </div>
              {clickDropdown1 || seguro1?  <Dropdown1/> : ""}
            </li>


            <li className="nav-item"
              onMouseEnter={() => {setSeguro2(1); closeDropdown1(); closeDropdown3()}}
              onMouseLeave={() => setSeguro2(0)}
            >
              <div id='NavLinkM' className="nav-links-dropdown" onClick= {()=>{handleClickDropdown2(); closeDropdown1(); closeDropdown3()}}>
                FUNCIONAMIENTO <i className="fas fa-caret-down" />
              </div>
              {clickDropdown2 || seguro2? <Dropdown2/> : ""}
            </li>


            <li className="nav-item"
              onMouseEnter={() => {setSeguro3(1); closeDropdown1(); closeDropdown2()}}
              onMouseLeave={() => setSeguro3(0)}
            >
              <div id='NavLinkM' className="nav-links-dropdown" onClick= {()=>{handleClickDropdown3(); closeDropdown1(); closeDropdown2()}}>
                COLEGIO SEGURO <i className="fas fa-caret-down" />
              </div>
              {clickDropdown3 || seguro3? <Dropdown3/> : ""}
            </li>
            {/* <li  className="nav-item">
              <Link id="NavLinkM" to="/monte_carmelo/colegio_seguro" className="nav-links" onClick= {closeMovileMenu}>
                COLEGIO SEGURO COVID-19
              </Link>
            </li> */}
            <li  className="nav-item">
              <Link id="NavLinkM" to="/monte_carmelo/admision" className="nav-links" onClick= {closeMovileMenu}>
                ADMISIÓN
              </Link>
            </li>
            <li className="nav-item">
              <Link  id="NavLinkM" to="/monte_carmelo/preguntas_frecuentes" className="nav-links" onClick= {closeMovileMenu}>
                PREGUNTAS FRECUENTES
              </Link>
            </li>
            <li className="nav-item">
              <Link id="NavLinkM" to="/monte_carmelo/contacto" className="nav-links" onClick= {closeMovileMenu}>
                CONTACTO
              </Link>
            </li>

          </ul>
        </nav>
    </nav>
  );
}
export default Navbar;
   

