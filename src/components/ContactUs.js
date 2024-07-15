import React from 'react';
import 'C:/Users/DELL/rhyno-ev/src/styles/ContactUs.css';
import instagramIcon from 'C:/Users/DELL/rhyno-ev/src/assets/instagram-icon.png';
import linkedinIcon from 'C:/Users/DELL/rhyno-ev/src/assets/linkedin-icon.png';

const ContactUs = () => {
  return (
    <div className="contact-us-box">
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Mail: <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
        <p>Mobile no.: <a href="tel:+919023987528">+91-9023987528</a></p>
        <p>Location: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="map-container">
          <iframe
            title="Rhyno Wheels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3242619893014!2d72.63115171492263!3d23.215318384853634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2d5d1a2f924f%3A0xd84e9146c7ed7a5b!2sPDEU%20(Formerly%20PDPU)%20Hostel%2C%20Raisan%2C%20Gandhinagar%2C%20Gujarat%20382507%2C%20India!5e0!3m2!1sen!2sus!4v1634128479192!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
