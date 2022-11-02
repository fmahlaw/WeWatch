import React, {  useState } from "react";
import "./frontPage.css"
import Header from "../header";

function HalamanAwal (props) {
  const [registerInput, setRegisterInput] = useState({});/**/
  const [wantToSign,setWantToSign] = useState(true) /*changes menus login or register */

  const {isLogin, setIsLogin} = props

  return (
    <>
     <Header> </Header>

      <div className="body-web">
        <div className="img-cont"></div>
        <div className="img-cont"></div>
        <div className="img-cont"></div>
      </div>

      {wantToSign ? 
        <SignIn wantToSign={setWantToSign} input={registerInput} setInput={setRegisterInput}></SignIn>
       : 
        <Register wantToSign={setWantToSign} input={registerInput} setInput={setRegisterInput}></Register>
      }
    </>
  );
}

function Register(props) 
{
  const registerInput = props.input;
  const setRegisterInput = props.setInput;
  const setWantToSign = props.wantToSign

  const handleSubmit = (e) => {
    
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterInput({ ...registerInput, [name]: value });
  };

  const handleSignIn = (e) => {
    setWantToSign(true)
  };

  const handleRegister = () => {
    
    
  }

  return (
    <>
      <div className="login-box">
        <div className="login">
          <h2>Let's Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name="email" onChange={handleChange} />
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
            <label>Confirm Password</label>
            <input type="password" name="confirm-pass" onChange={handleChange} />
            <button className="login2" onClick={handleRegister}><a className="login3" href="/"> Register</a></button>
          </form>
          <p className="info-signin">
            Already Have An Account?
            <p onClick={handleSignIn} className="sign-in-button">
              Sign in
            </p>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

function SignIn(props) {
  const registerInput = props.input;
  const setRegisterInput = props.setInput;
  const setWantToSign = props.wantToSign

  const handleSubmit = (e) => {
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterInput({ ...registerInput, [name]: value });
  };

  const handleRegister = () => {
     setWantToSign(false)
  };

  const handleLogin = () => {


    return (<> </>)
  }

 

  return (
    <>
      <div className="login-box">
        <div className="login">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name="email" onChange={handleChange} />
            <label>Password</label>
            <input  type="password" name="password" onChange={handleChange} />
            <button className="login2" onClick={handleLogin}><a className="login3" href="/"> Login</a></button>
          </form>
          <p className="info-signin">
            Do not Have An Account?
            <p onClick={handleRegister} className="register-button">
              Sign up
            </p>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default HalamanAwal;
