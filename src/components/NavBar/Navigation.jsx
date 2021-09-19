import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { SidebarData } from '../SideBar/SideBar';
import { useLocation } from "react-router-dom";
import './Navigation.css';
// import { useDispatch, useSelector} from 'react-redux'
import { IconContext } from 'react-icons';
import { BiUserCircle } from "react-icons/bi";
import {SiGooglemaps} from 'react-icons/si'
// import {logoutUser} from '../../Redux/actions/authAction'

function Navigation() {

  // const user = useSelector((state) => state.authReducer.user) 
  // console.log("home user",user)
  // const dispatch = useDispatch()
  // const logout =()=>{ 
  //     dispatch (logoutUser())
  // }

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => sidebar ? setSidebar (false)  : setSidebar(true);


  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "activated" : "";
    
  };
  

  
  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)
console.log(`user`, user)

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
       
            <div className="d-flex ">
            <h4><BiUserCircle/> {user.nomCompletManager}</h4>
              <h4 className="ml-3" ><SiGooglemaps/> {user.AdrDepot}</h4>
            </div>
          
         
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
                        {/* <p className="text-white">Elementry Stock</p>  */}
            </div>
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
