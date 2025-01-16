import React from 'react'
import PhotoOne from './imgs/1.png'
import PhotoTwo from './imgs/2.png'
import PhotoThree from './imgs/3.png'
import './SpecificationCard.css'

export default function SpecificationCard({ title, number, text, image }) {
  return (
    <li className="specification-list__item">
        <p className="specification-list__number">0{number}</p>
        <h4 className="specification-list__title">{title}</h4>
        <p className="specification-list__text">{text}</p>
        <img className='specification-list__image' src={image} alt="" />
    </li>
  )
}

export const specificationsList = [
    {
        title: 'Personalize',
        text: 'Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!',
        img: PhotoOne,
    },
    {
        title: 'Write & Understand',
        text: 'Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!',
        img: PhotoTwo,
    },
    {
        title: 'Alivio!',
        text: 'Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!',
        img: PhotoThree,
    }
]