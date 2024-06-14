import React, { useState } from 'react';

import 'styles/components/contacts.sass'

const Contacts = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const formContact = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:thiakiyoshida@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
    }

    return (
        <section id='contacts' className='container container-contacts hidden'>
            <h3 className='title-container'>Contatos<hr /></h3>
                <form onSubmit={formContact} className='form-contacts'>
                    <div>
                        <label htmlFor='email'>E-mail</label>
                        <input type='text' id='email' placeholder='E-mail' className='form-input' onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor='subject'>Assunto</label>
                        <input type='text' id='subject' placeholder='Assunto' className='form-input' onChange={e => setSubject(e.target.value)} required />
                    </div>
                    <div className="full-width">
                        <label htmlFor='message'>Mensagem</label>
                        <textarea id='message' placeholder='Mensagem' className='form-input form-textarea' onChange={e => setMessage(e.target.value)} required />
                    </div>
                    <div className="full-width form-button">
                        <button type='submit'>Enviar e-mail &gt;</button>
                    </div>
                </form>
        </section>
    )

}

export default Contacts;
