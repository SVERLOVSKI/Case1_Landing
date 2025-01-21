import { useState, useContext } from 'react'
import React from 'react'
import Button from '../Button/Button'
import './Headerlogin.css'

export default function HeaderLogin({ loginStatus, onClickLogin, onClickCall }) {


    if (loginStatus === true) {
        return (
            <Button className='profile-button'>Profile</Button>
        )
    } return (
        <div className="login">
            <Button className='login-button' onClick={onClickLogin}>Log In</Button>
            <Button className='trial-button' onClick={onClickCall}>Start Trial</Button>
        </div>
    )
}
