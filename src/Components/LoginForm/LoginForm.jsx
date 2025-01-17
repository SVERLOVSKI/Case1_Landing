import { useState } from 'react';
import './LoginForm.css'
import Logo from './Logo.svg'

export default function LoginForm({visibleLoginForm, onClick}) {
  const [status, setStatus] = useState(false);


  function mockLogin(e) {
    e.preventDefault();
    setTimeout(() => setStatus(true), 2000);
  }

  function closeForm() {
    setStatus(false);
    onClick();
  }

  if (status === true) {
    return (
      <div className={visibleLoginForm === true ? 'login-form_active' : 'login-form'}>
        <div className="login-form-content">
          <button onClick={closeForm} className='close-loginform' type='submit'>Close</button>
          <p className="login-notification">я сделаю тут красиво....</p>
        </div>
    </div>
    )
  } return (
    <div className={visibleLoginForm === true ? 'login-form_active' : 'login-form'}>
        <div className="login-form-content">
          <button onClick={onClick} className='close-loginform' type='submit'>Close</button>
          <img className='login-form-logo' src={Logo} alt="logo"/>
          <form className='login-form-fields' action="#" method='post'>
            <label htmlFor="login-field">Enter Your login</label>
            <input id='login-field' type="text" className="login-input" placeholder='Login'/>
            <label htmlFor="password-field">Enter Your password</label>
            <input id='password-field' type="password" className="password-input" placeholder='Password'/>
            <button onClick={mockLogin} className='login-form-button' type='submit'>Log in</button>
          </form>
        </div>
    </div>
  )
}
