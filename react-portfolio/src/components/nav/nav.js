import React from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return(
    <nav>
      <a href="#home"><BiHomeAlt/></a>
      <a href="#about"><BiUser/></a>
      <a href="#projects"><AiOutlineProject/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}
export default Nav