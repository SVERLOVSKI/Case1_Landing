import React from 'react'
import Button from './../Button/Button'
import './Promo.css'

export default function Promo() {
    return (
        <section className="promo">
            <div className="promo-contanier">
                <h1 className="promo-title">Be aware,<br />Manage well.</h1>
                <p className="promo-description">Everyone experiences stress in different ways.<br />
                    Let Alivio guide you, in a personalized journal<br />
                    experience, to overcome your stress.</p>
                    <Button className="promo-button">Find Your Way</Button>
            </div>
        </section>
    )
}
