import React from 'react'
import Button from '../Button/Button'
import './Headerlogin.css'

export default function HeaderLogin() {
    return (
        <div className="login">
            <Button className='login-button'>Log In</Button>
            <Button className='trial-button'>Start Trial</Button>
        </div>
    )
}
