import HeaderLogin from '../HeaderLogin/HeaderLogin'
import Button from '../Button/Button'
import './Header.css'
import Logo from './Logo.svg'
import { useState } from 'react'


export default function Header({ loginStatus, onClickLogin, onClickCall, onClickMenu }) {
  

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-container">
          <img className='header-logo' src={Logo} alt="" width={79} height={23} />
          <nav className="header-navigation">
            <ul className="header-navigation-list">
              <li className="header-navigation-list__item"><a href="#specs">Why Alivio</a></li>
              <li className="header-navigation-list__item"><a href="#specs-list">Solutions</a></li>
              <li className="header-navigation-list__item"><a href="#blog">Community</a></li>
              <li className="header-navigation-list__item"><a href="#case">Pricing</a></li>
            </ul>
          </nav>
          <Button onClick={onClickMenu} className='header-menu-button'>Menu</Button>
          <HeaderLogin
          loginStatus={loginStatus}
          onClickLogin={onClickLogin}
          onClickCall={onClickCall} />
        </div>
      </div>
    </header>
  )
}
