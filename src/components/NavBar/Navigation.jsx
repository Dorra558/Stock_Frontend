import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { SidebarData } from '../SideBar/SideBar';
import { useLocation } from "react-router-dom";
import './Navigation.css';
import { IconContext } from 'react-icons';
import {Container} from 'react-bootstrap'

function Navigation() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => sidebar ? setSidebar (false)  : setSidebar(true);


  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "activated" : "";
    
  };
  
  // const [activeLink, setactiveLink] = useState(0);
  // const handleClick = () => {
  //   const currentClass = document.getElementsByClassName("nav-text");
  //   for (let i = 0; i < currentClass.length; i++) {
  //     currentClass[i].classList.toggle("active_item");
  //     console.log(currentClass[i]);
  //   }
  // };  


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
       
        <div className='navbar container '>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            <FiIcons.FiLogIn  />
          </Link>
        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <img src="" alt="" />
            <h1>Elementry Stock</h1> 
            {SidebarData.map((item, index) => {
              return (
                <>             
                  <li key={index} className={ item.upgrade ? "activated" : activeRoute(item.path)}>
                                    <Link
                                      className= 'nav-text'
                                      // activeClassName="active"
                                      to={item.path}>
                                      {item.icon}
                                      <span>{item.title}</span>
                                    </Link>
                  </li>
                </>
              );
            })}
          </ul>   
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navigation;
