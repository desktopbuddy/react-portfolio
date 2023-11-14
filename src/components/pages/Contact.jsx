import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'message') {
      return setMessage(value);
    }
  }

  const handleRequiredFields = (e) => {
    const targetRequiredEl = document.getElementById(`${e.target.name}-required`);
    if (!e.target.value.length) {
      targetRequiredEl.textContent = `*${e.target.name} required`;
    } else {
      targetRequiredEl.textContent = '';
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // reset form
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact-section">
      <h2>Send me a message!</h2>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <div className="input-group">
          <div className="input-labels">
            <label for="name">Name</label>
            <span id="name-required" class="error-message"></span>
          </div>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            onBlur={handleRequiredFields}
          />
        </div>
        <div className="input-group">
          <div className="input-labels">
            <label for="email">Email</label>
            <span id="email-required" class="error-message"></span>
          </div>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            onBlur={handleRequiredFields}
          />
        </div>
        <div className="input-group">
          <div className="input-labels">
            <label for="message">Message</label>
            <span id="message-required" class="error-message"></span>
          </div>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleRequiredFields}
          />
        </div>
        <button class="btn-primary" type="submit">Send</button>
      </form>
    </section>
  )
}