import React from "react";

const Header = () => {
  return (
    <div className="navWrapper">
      <div className="navContainer">
        <a href="/">
          <div className="logoWrapper">
            <div className="logoImgWrapper">
              <img width="30" height="30" src="/images/logo.png" alt="" />
            </div>
            <span className="logo1">Job</span>
            <span className="logo2">bee</span>
          </div>
        </a>
        <div className="btnsWrapper">
          <a href="/employeer/jobs/new">
            <button className="postAJobButton">
              <span>Post A Job</span>
            </button>
          </a>

          <a href="/login">
            <button className="loginButtonHeader">
              <span>Login</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
