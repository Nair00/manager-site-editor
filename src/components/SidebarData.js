import React from 'react';
import $ from 'jquery';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Home from '../pages/Home';


export const SidebarData = [
  {
    title: 'Add Button',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    command: () => {
      console.log("title");
    }
  },
  {
    title: 'Add Title',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("button");
    }
  },
  {
    title: 'Turn Red',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("Red");
      $("h1").css({color: "red"});
    }
  },
  {
    title: 'Turn Black',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      $("h1").css({color: "black"});
    }
  }
];