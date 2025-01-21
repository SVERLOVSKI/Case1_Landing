import { useState } from 'react';
import './LoginForm.css'
import Logo from './Logo.svg'

export default function LoginForm({visibleLoginForm, onClick, onClickHandlerButtons }) {
  const [status, setStatus] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function checkLoginValue(e) {
    setLoginValue(e.target.value)
  }

  function checkPasswordValue(e) {
    setPasswordValue(e.target.value)
  }

  function mockLogin(e) {
    e.preventDefault();
    setTimeout(() => {
      setStatus(true);
      onClickHandlerButtons();
    }, 2000)
  }

  function closeForm() {
    setLoginValue('');
    setPasswordValue('');
    setStatus(false);
    onClick();
  }

  if (status === true) {
    return (
      <div className={visibleLoginForm === true ? 'login-form_active' : 'login-form'}>
        <div className="login-form-content">
          <button onClick={closeForm} className='close-loginform' type='submit'>Close</button>
          <p className="login-notification">Вход выполнен успешно:)</p>
        </div>
    </div>
    )
  } return (
    <div className={visibleLoginForm === true ? 'login-form_active' : 'login-form'}>
        <div className="login-form-content">
          <button onClick={closeForm} className='close-loginform' type='submit'>Close</button>
          <img className='login-form-logo' src={Logo} alt="logo"/>
          <form className='login-form-fields' action="#" method='post'>
            <label htmlFor="login-field">Enter Your login</label>
            <input value={loginValue} onChange={checkLoginValue} id='login-field' type="text" className='login-input' placeholder='Login'/>
            <label htmlFor="password-field">Enter Your password</label>
            <input value={passwordValue} onChange={checkPasswordValue} id='password-field' type="password" className="password-input" placeholder='Password'/>
            <button onClick={mockLogin} disabled={loginValue.length < 1 || passwordValue.length < 1} className={loginValue.length < 1 || passwordValue.length < 1 ? 'login-form-button_disabled' : 'login-form-button'} type='submit'>Log in</button>
          </form>
        </div>
    </div>
  )
}
