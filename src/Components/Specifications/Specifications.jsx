import React from 'react'
import SpecificationCard, {specificationsList} from './SpecificationCard/SpecificationCard'
import './Specifications.css'

export default function Specifications() {
  return (
    <section className="specifications" id='specs'>
        <div className="specifications-container">
        <h3 className="specifitacion-title">How it works</h3>
        <article className="specification-text">
              <p className="specifitacion-subtitle">Understand & Release<br />the stress in 3 steps</p>
            <p className="specification-description">Alivio offers as many journals it takes, tackling different areas such as <br /> anxiety, overwhelmedness, sadness, or anger, and a variety of personal <br /> causes, to help you become aware of your emotions, and guide you in how <br /> to manage stress.</p>
        </article>
        <ul className="specifications-list" id='specs-list'>
            {specificationsList.map((card, index) => (
              <SpecificationCard
                title={card.title}
                number={index + 1}
                text={card.text}
                image={card.img}
              />
            ))}
        </ul>
        </div>
    </section>
  )
}
