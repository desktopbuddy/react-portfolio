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
          <label for="name">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        </div>
        <div className="input-group">
          <label for="message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}