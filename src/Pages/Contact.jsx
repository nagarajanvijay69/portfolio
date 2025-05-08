import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const onSubmit = async (event) => {
    
    if (!Name.trim()|| !Email.trim() || !Message.trim()) {
      alert("Please fill all the fields");
      return;
    }
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "028500d6-64b1-4cb7-815a-efcea1540594");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setName("");
    setEmail("");
    setMessage("");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    alert("Form Submitted Successfully!");
  };

  return <>
  <div id="contact" className="contact">
    <span className="contact-head">Connect With Me</span>
    <div className="contact-div">
    <div className="contact-left">
        <div className="left-head heading">Follow Me On</div>
        <div className="left-para">Have any questions or need support? We'd love to hear from you!
        Please reach out to us using the information below:</div>
        <ul>
          <li><a href="https://www.linkedin.com/in/nagarajan-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target='_blank'><img src="./linkedin.svg" /><span>Linked In</span></a></li>
          <li><img src="./mail.svg" /><span>nagarajanvijay69@gmail.com</span></li>
          <li><img src="./location.svg" /><span>Tirunelveli, Tamilnadu</span></li>
        </ul>
    </div>
    <div className="contact-right">
      <div className="right-head heading">Fill The Form</div>
        <form className='contact-form' onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' value={Name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder='Enter your email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Enter Your Message</label>
            <textarea name="message" placeholder='Enter your questions' value={Message} onChange={(e) => setMessage(e.target.value)}/>
            <button type='submit' className='contact-submit'>Submit</button>
        </form>
    </div>
    </div>
  </div>
</>
}

export default Contact