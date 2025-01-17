import React from 'react'
import Button from './../Button/Button'
import './Team.css'
import ClientPhoto from './client-photo.png'

export default function Team({onClick}) {
  return (
    <section className="team" id='case'>
        <div className="team-container">
            <article className="team-article-content">
            <img src={ClientPhoto} alt="" className="client-photo" />
                <div className="case-card">
                    <p className="case-title">Customized For</p>
                    <img src={ClientPhoto} alt="" className="case-card__client-photo" />
                    <p className="client-name">Mikayla</p>
                    <p className="spec-list-title">Your custom contents</p>
                    <ul className="spec-list">
                        <li className="spec-list__item">Understand Your Stress</li>
                        <li className="spec-list__item">Anger Management</li>
                    </ul>
                </div>
            </article>
            <article className="team-article-text">
                <h3 className="team-article-title">Our product</h3>
                <p className="team-article-subtitle">You tell us your stress,<br />We make your diary</p>
                <p className="team-article-description">Everyone experiences it, and in different ways.<br />
                Let Alivio guide you, in a personalized journal experience, to<br />
                overcome your stress.</p>
                <Button onClick={onClick} className='team-button'>Find Your Way</Button>
            </article>
        </div>
    </section>
  )
}
