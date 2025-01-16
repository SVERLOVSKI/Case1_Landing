import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-contanier">
            <nav className="footer-nav">
                <ul className="footer-nav-list">
                    <li className="footer-nav-list__item"><a href="#header">Alivio</a></li>
                    <li className="footer-nav-list__item"><a href="#specs">Why Alivio</a></li>
                    <li className="footer-nav-list__item"><a href="#specs-list">Solutions</a></li>
                    <li className="footer-nav-list__item"><a href="#blog">Community</a></li>
                    <li className="footer-nav-list__item"><a href="#case">Pricing</a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}
