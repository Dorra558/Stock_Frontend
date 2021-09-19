import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { SideBarAdmin } from '../SideBarAdmin/SideBarAdmin';
import { useLocation } from "react-router-dom";
import './Navigation.css';
import { IconContext } from 'react-icons';
import {Container} from 'react-bootstrap'
import { BiUserCircle } from "react-icons/bi";

function NavigationAdmin() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => sidebar ? setSidebar (false)  : setSidebar(true);

  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)
console.log(`user`, user)

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
       
        <div className='navbar  d-flex justify-content-between'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <h4><BiUserCircle/> {user.nomCompletManager}</h4> */}
        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="text-center pt-4">
            <img src="imgs/logoStock.jpg" className="imgStock" alt="" />
                       
            </div>
            {SideBarAdmin.map((item, index) => {
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

export default NavigationAdmin;
