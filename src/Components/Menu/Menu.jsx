import React, { useState } from 'react'
import './Menu.css'
import Logo from './Logo.svg'

export default function Menu({ visibleMenu, onClick }) {
    let [screenWidth, setScreenWidth] = useState(window.screen.width);

    if (visibleMenu === true) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }

  return (
    <section className={visibleMenu === true && screenWidth !== true ? 'menu active' : 'menu'}>
        <img src={Logo} alt="" className="menu-logo" />
        <ul className="menu-list">
        <li onClick={onClick} className="menu-list__item"><a href="#specs">Why Alivio</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#specs-list">Solutions</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#blog">Community</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#case">Pricing</a></li>
        <li onClick={onClick} className="menu-list__item close"><a href="#">Close</a></li>
        </ul>
    </section>
  )
}

