import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    upgrade: false,
    title: 'Tableau de bord',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {

    title: 'Commandes',
    path: '/commandes',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text'

  },
  {
    title: 'Etat de stock',
    path: '/etat de stock',
    icon: <FaIcons.FaCartPlus />,
    className: 'nav-text'

  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'

  },
  {
    title: 'Paramétres',
    path: '/settings',
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
