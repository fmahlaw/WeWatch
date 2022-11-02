import React from "react";
import './header.css'
export default function Header(props) {
  const isLogin = props.login;
  const setIslogin = props.setIslogin

  return (
    <>
    {isLogin ?<Login setIslogin={setIslogin} ></Login> : <NotLogin setIslogin={setIslogin}> </NotLogin>}
    </>
  );
}

function Login(props) {
  const setIslogin = props.setIslogin

  return( <>  <div className="header">
  <div className="site-name">
    {" "}
    <a href="/">Wewatch</a>
  </div>
  <div className="user-info">
    <div className="user-pict"></div>
    <div className="user-name">Halo, Joe!</div>
  </div>
  <div className="more-button">
    <button className="donate-but">
      {" "}
      <a href="/donate">DONATE </a>
    </button>{" "}
    <button className="contact-but">
      {" "}
      <a href="/contactMe">Contact Me </a>
    </button>{" "}
    <button className="logout-but">
      <a href="/frontPage">Logout </a>
    </button>
  </div>
</div></>);
}

function NotLogin(props) {

  const setIslogin = props.setIslogin
  
  return( <>  <div className="header">
  <div className="site-name">
    {" "}
    <a href="/">Wewatch</a>
  </div>
  <div className="more-button">
    <button className="donate-but">
      {" "}
      <a href="/donate">DONATE </a>
    </button>{" "}
    <button className="contact-but">
      {" "}
      <a href="/contactMe">Contact Me </a>
    </button>{" "}
  </div>
</div></>);
}
