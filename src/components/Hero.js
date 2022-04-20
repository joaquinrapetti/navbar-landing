import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <span>
                  <FaDatabase />
                  Staxx
                </span>
                <span>
                  <FaAsterisk />
                  Star AI
                </span>
                <span>
                  <FaAccusoft />
                  Accusoft
                </span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in with</p>
                <div className="social-login">
                  <span>
                    <FaFacebook size={20} />
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>
                    <FaGithub size={20} />
                  </span>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Password" />
                  <button>Create Your Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree to our
                  <span className="primary-color">Terms, Data Policy</span> and
                  <span className="primary-color"> Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
