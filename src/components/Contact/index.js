import React, {useState} from 'react';
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import './contact.scss'

const Contact = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [showForm,setShowForm] = useState(true);
    const [showBtn, setShowBtn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "records"), {
                name: name,
                mail: mail,
                message: message,
            });
        } catch (err) {
            alert(err);
        }
        setName("");
        setMail("");
        setShowBtn(true);
        setShowForm(false);
    };
  return (

      <div className="container" id="contact">
          <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                  <h2>Get in touch <br/> with us :</h2>
                  <p>Fill in the form to download cv</p>
                  {showBtn === true ? <div className="brochures">

                      <a href="/"download="Barış Can Çifçi Cv" className="download-btn">CV</a>
                  </div> : null}
              </div>
              <div className="contact">
                  <form>
                      <p>
                          <label>First Name</label>
                          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name"/>
                      </p>
                      <p>
                          <label>Email</label>
                          <input type="email" name="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail"/>
                      </p>
                      <p className="full">
                          <label>Message</label>
                          <input type="text" onChange={(e) => setMessage(e.target.value)} value={message}></input>
                      </p>
                      <p className="full wow fadeInUp">
                          <button onClick={handleSubmit}>Submit</button>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contact;