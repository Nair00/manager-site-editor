import React from 'react';
import $ from 'jquery';
import * as IoIcons from 'react-icons/io';
import { homeObjects } from '../pages/HomePage/Data';
// import Home from '../pages/HomePage/Home';

function getStyleSheet(unique_title){
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if(sheet.title == unique_title) {
      return sheet;
    }
  }
}

// var ss = getStyleSheet("App.js");
let root = document.documentElement;

export var SidebarData = [
  {
    title: 'Change Header 1 Color',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("title");
      root.style.setProperty('--headerColorLight', '#A27E8E');
    }
  },
  {
    title: 'Change Header 2 Color',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("title");
      root.style.setProperty('--headerColorDark', '#88292F');
    }
  },
  {
    title: 'Change Button Color',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("title");
      root.style.setProperty('--accent', 'green');
    }
  },
  {
    title: 'Change Primary Background',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      console.log("title");
      root.style.setProperty('--backDark', '#2E1E0F');
    }
  },
  {
    title: 'Add Card',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    command: () => {
      homeObjects.push(
        {
          lightBg: false,
          lightText: true,
          lightTextDesc: true,
          topLine: 'Exclusive Access',
          headline: 'Header1',
          description:
            'description1',
          buttonLabel: 'Get Started',
          buttonColor: 'blue',
          imgStart: '',
          img: 'logo512.png',
          alt: 'image'
        }
      )
    }
  }
];