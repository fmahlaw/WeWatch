import React, { useState } from "react";
import "./contactMePage.css";
import Header from "../header";

function ContactMe(props) {
  const [emailInput, setEmailInput] = useState({});
 
  const {isLogin,setIsLogin} = props


  const handleSubmit = (e) => {
    alert(emailInput.subject)
  };

  const handleChange = (e) => { 
    const name = e.target.name
    const value = e.target.value

    setEmailInput({...emailInput,[name]:value })
  };



  return (
    <>
      <Header login={isLogin} setIslogin={setIsLogin}> </Header>

      <div className="contact-me-cont">
        <div className="owner-mess">
          <p className="owner-text">
            {" "}
            You can reach me @ and message me @ discord
          </p>
          <p className="owner-text"> or you can what'sapp me on +27272</p>
          <p className="owner-text">
            {" "}
            You can messagge me trhough this website aswell{" "}
          </p>
          <p className="owner-text">
            {" "}
            send me feedback if you find something odd or unusual
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-cont">
            <div className="subject-cont">
              <label> Subject</label>
              <input name="subject" type="text" onChange={handleChange} className="subject-box" />{" "}
            </div>
            <div className="message-cont">
              <label> Message</label>
              <input name="message" type="text" onChange={handleChange} className="message-box" />
            </div>
            <div className="button-cont">
            <input type="submit"/> 
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
