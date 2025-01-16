import React from 'react'
import Button from '../Button/Button'
import './Blog.css'
import BlogPhotoMock from './Video.png'

export default function Blog() {
  return (
    <section className="blog" id='blog'>
        <div className="blog-container">
            <article className="blog-text">
                <h3 className="blog-title">Let's hear about Kayla's success story</h3>
                <p className="blog-description">See how well Alivio works in a real customer’s life. </p>
                <Button className='blog-button'>Let’s get started</Button>
            </article>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='blank'><img className='blog-photo' src={BlogPhotoMock} alt=""/></a>
        </div>
    </section>
  )
}
