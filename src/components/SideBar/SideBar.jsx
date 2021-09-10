import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux'

export const SidebarData = [
  {
    upgrade: false,
    title: 'Tableau de bord',
    path: '/dashboard/dashboard',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {

    title: 'Mes commandes',
    path: '/dashboard/commandes',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text'

  },
  {
    title: 'Etat de stock',
    path: '/dashboard/etat de stock',
    icon: <FaIcons.FaCartPlus />,
    className: 'nav-text'

  },
  {
    title: 'Team',
    path: '/dashboard/team',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'

  },
  {
    title: 'LogOut',
    path: '/login',
    icon: <AiIcons.AiFillSetting />,
    className: 'nav-text'

  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   className: 'nav-text'

  // }
]
;
