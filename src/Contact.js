import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Full Name is required';
    if (!formData.email) {
      validationErrors.email = 'Email Address is required';
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.subject) validationErrors.subject = 'Subject is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <>
      <style>
        {`
          .contact {
            max-width: 700px;
            margin: 0 auto;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .contact:hover {
            transform: scale(1.01);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }

          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            transition: background-color 0.3s, transform 0.2s;
          }

          .btn-primary:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }

          .error-text {
            color: #dc3545;
            font-size: 0.9em;
          }
            p{
            text-align: center;
            }

          .success-message {
            background-color: #d4edda;
            color: #155724;
            padding: 10px;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
            margin-bottom: 15px;
          }
        `}
      </style>
      <div className="container mt-5 contact">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p>Let’s Work Together!<br/>
         Tell us what you are Looking for!<br/>
        We believe in building Trust and Relation first.</p>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-text">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="error-text">{errors.subject}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="error-text">{errors.message}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
      <br />
    </>
  );
}
