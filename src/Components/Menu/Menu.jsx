import React, { useState } from 'react'
import './Menu.css'
import Logo from './Logo.svg'

export default function Menu({ loginStatus, visibleMenu, onClick }) {

  if (visibleMenu === true) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <section className={visibleMenu === true ? 'menu active' : 'menu'}>
      <img src={Logo} alt="" className="menu-logo" />
      <ul className="menu-list">
        {loginStatus === true ? <li onClick={onClick} className="menu-list__item profile"><a href="#">Profile</a></li> : null}
        <li onClick={onClick} className="menu-list__item"><a href="#specs">Why Alivio</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#specs-list">Solutions</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#blog">Community</a></li>
        <li onClick={onClick} className="menu-list__item"><a href="#case">Pricing</a></li>
        <li onClick={onClick} className="menu-list__item close"><a href="#">Close</a></li>
      </ul>
    </section>
  )
}

