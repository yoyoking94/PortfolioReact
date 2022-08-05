import React, { useState } from 'react';
import '../css/contact.css'
import Navigation from './navigation'

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [textArea, setTextArea] = useState("");

  const submit = (e) => {
    e.preventDefault();

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    console.log("name : " + name);
    console.log("mail : " + mail);
    console.log("subject : " + subject);
    console.log("textArea : " + textArea);
  }

  return (
    <div className='contact'>
      <div className='toast' id='snackbar'>@mail send !</div>
      <form>
        <div className="name">
          <label for="name"></label>
          <input type="text" placeholder="My name is" name="name" id="name_input" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="email">
          <label for="email"></label>
          <input type="email" placeholder="My @mail is" name="email" id="email_input" required onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className="subject">
          <label for="email"></label>
          <input type="email" placeholder="My subject is" name="subject" id="subject_input" required onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="message">
          <label for="message"></label>
          <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required onChange={(e) => setTextArea(e.target.value)}></textarea>
        </div>
        <div className="submit">
          <button onClick={submit} id="form_button">Send Message</button>
        </div>
        <div className='displayRes'>
          <div>Name : {name}</div>
          <div>Mail : {mail}</div>
          <div>Subject : {subject}</div>
          <div>TextArea : {textArea}</div>
        </div>
      </form>
      <Navigation />

    </div >
  );
}

export default Contact;