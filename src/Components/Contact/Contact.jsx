import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34d32663-5575-4143-b289-e5bbd02c16db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        alert('Form Submitted Successfully')
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex impedit velit, consectetur tenetur dolorum exercitationem quas non similique fuga natus voluptates cumque molestias, recusandae deserunt itaque explicabo nihil. Reprehenderit dolore ipsam similique quo iusto. Sequi hic aliquam autem totam? Dignissimos, modi? Iusto, eveniet dolore.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>gsriofficial31@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 9555662637</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Lucknow,UP</p>
                </div>
            </div>
        </div>
        <form onSubmit = {onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="Your Email">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="Write Your Message here">Your Message</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
            <button type = "submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
