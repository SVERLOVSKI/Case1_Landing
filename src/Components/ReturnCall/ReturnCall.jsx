import { useState } from 'react';
import './ReturnCall.css'

export default function ReturnCall({ visibleReturnCallForm, onClick }) {
    const [status, setStatus] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    function checkPhoneValue(e) {
        setPhoneValue(e.target.value);
    }

    function checkEmailValue(e) {
        setEmailValue(e.target.value);
    }

    function mockSendForm(e) {
        e.preventDefault();
        setTimeout(() => setStatus(true), 2000);
    }

    function closeForm() {
        setPhoneValue('');
        setEmailValue('');
        setStatus(false);
        onClick();
      }

    if (status === true) {
        return (
            <div className={visibleReturnCallForm === true ? 'return-form_active' : 'return-form'}>
                <div className="return-form-content">
                    <button onClick={closeForm} className='close-returnform' type='submit'>Close</button>
                    <p className="return-notification">Ваши данные отправлены менеджеру:)</p>
                </div>
            </div>
        )
    } return (
        <div className={visibleReturnCallForm === true ? 'return-form_active' : 'return-form'}>
            <div className="return-form-content">
                <button onClick={closeForm} className='close-returnform' type='submit'>Close</button>
                <form className='contacts-form-fields' action="#" method='post'>
                    <label htmlFor="phone-field">Enter Your Phone</label>
                    <input value={phoneValue} onChange={checkPhoneValue} id='phone-field' type="phone" className="phone-input" placeholder='Phone number' />
                    <label htmlFor="email-field">Enter Your Email</label>
                    <input value={emailValue} onChange={checkEmailValue} id='email-field' type="email" className="email-input" placeholder='Email' />
                    <button onClick={mockSendForm} disabled={phoneValue.length < 1 && emailValue.length < 1} className={phoneValue.length < 1 && emailValue.length < 1 ? 'send-form-button_disabled' : 'send-form-button'} type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
