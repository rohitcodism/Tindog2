/* eslint-env node */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const[active, setActive] = useState('')

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="items-center gap-2" onClick={()=>{
          setActive("");
          window.scroll(0,0);
        }}>
          <img src="../assets/rp-logo.png" alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Rohit</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${active === link.id} ? text-white : text-secondary`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar