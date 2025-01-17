import { useState } from 'react';
import './ReturnCall.css'

export default function ReturnCall({ visibleReturnCallForm, onClick }) {
    const [status, setStatus] = useState(false);


    function mockSetForm(e) {
        e.preventDefault();
        setTimeout(() => setStatus(true), 2000);
    }

    function closeForm() {
        setStatus(false);
        onClick();
      }

    if (status === true) {
        return (
            <div className={visibleReturnCallForm === true ? 'login-form_active' : 'login-form'}>
                <div className="login-form-content">
                    <button onClick={closeForm} className='close-loginform' type='submit'>Close</button>
                    <p className="login-notification">я сделаю тут красиво....</p>
                </div>
            </div>
        )
    } return (
        <div className={visibleReturnCallForm === true ? 'login-form_active' : 'login-form'}>
            <div className="login-form-content">
                <button onClick={onClick} className='close-loginform' type='submit'>Close</button>
                <form className='contacts-form-fields' action="#" method='post'>
                    <label htmlFor="phone-field">Enter Your Phone</label>
                    <input id='phone-field' type="phone" className="phone-input" placeholder='Phone number' />
                    <label htmlFor="email-field">Enter Your Email</label>
                    <input id='email-field' type="email" className="email-input" placeholder='Email' />
                    <button onClick={mockSetForm} className='login-form-button' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
