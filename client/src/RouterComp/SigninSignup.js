import React, { useEffect, useRef, useState } from "react";
import "./SigninSignupStyles.css";
import ArticleHeading from "./ArticleHeading";
import axios from "axios";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

function SigninSignup() {
  const containerRef = useRef(null);
  const signUpBtnRef = useRef(null);
  const signInBtnRef = useRef(null);
  const overlayRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const signUpBtn = signUpBtnRef.current;
    const signInBtn = signInBtnRef.current;

    const handleSignIn = () => {
      container.classList.remove("right-panel-active");
    };

    const handleSignUp = () => {
      container.classList.add("right-panel-active");
    };

    signInBtn.addEventListener("click", handleSignIn);
    signUpBtn.addEventListener("click", handleSignUp);

    if (window.innerWidth <= 768 && overlayRef.current) {
      overlayRef.current.style.display = "none";
    }

    return () => {
      signInBtn.removeEventListener("click", handleSignIn);
      signUpBtn.removeEventListener("click", handleSignUp);
    };
  }, []);

//Authentication logic section

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value} );
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user/signup", signUpData);
      alert(response.data.message || "Sign Up successfull!");
      setSignUpData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error during Sign-up:", error);
      console.log("Sign Up Failed.")
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/user/signin", signInData);
      alert(response.data.message || "Sign In Successfull!");
      setSignInData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Errod during Sign-in:", error);
      alert("Sign in Failed");
    }
  };


  return(
  <>
      <ArticleHeading heading="Join Us" text="We're awaiting your arrival" />
      <div class="cred">
      <div className="container mt-4 mb-4 pt-4 pb-4" id="main" ref={containerRef}>
        <div className="form-container signup-container">
            <form onSubmit={handleSignUpSubmit}>
                <h1 className="text-dark mt-2">Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaFacebookF size={24} color="#3b5998" />
                  </a>
                  <a href="#" className="social">
                    <FaGoogle size={24} color="#db4437" />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn size={24} color="#0077b5" />
                  </a>
                </div>
                <span>or use your email for registration</span>
                <div className="inpfield">
                    <input type="text" placeholder="Name" className="form-control" name="name" value={signUpData.name} onChange={handleSignUpChange} required />
                    <label></label>
                </div>
                <div className="inpfield">
                    <input type="email" placeholder="Email" name="email" className="form-control" value={signUpData.email} onChange={handleSignUpChange} required />
                    <label></label>
                </div>
                <div className="inpfield">
                    <input type="password" placeholder="Password" name="password" className="form-control" value={signUpData.password} onChange={handleSignUpChange} required />
                    <label></label>
                </div>
                <div className="inpfield">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" className="form-control" value={signUpData.confirmPassword} onChange={handleSignUpChange} required />
                    <label></label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div className="form-container signin-container">
            <form onSubmit={handleSignInSubmit}>
                <h1 className="text-dark">Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaFacebookF size={24} color="#3b5998" />
                  </a>
                  <a href="#" className="social">
                    <FaGoogle size={24} color="#db4437" />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn size={24} color="#0077b5" />
                  </a>
                </div>
                <span>or use your account</span>
                <div className="inpfield">
                    <input type="text" placeholder="Email" name="email" className="form-control" value={signInData.email} onChange={handleSignInChange}required />
                    <label></label>
                </div>
                <div className="inpfield">
                    <input type="password" placeholder="Password" name="password" className="form-control" value={signInData.password} onChange={handleSignInChange} required />
                    <label></label>
                </div>
                <a href="#" className="forgetpass">Forget your password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>

        <div className="containerOverlay" id="overlayId" ref={overlayRef}>
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome !</h1>
                    <p>Login with your personal creds to stay connected</p>
                    <button id="signInBtn" ref={signInBtnRef}>Log In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, User</h1>
                    <p>Enter your personal details to get started</p>
                    <button id="signUpBtn" ref={signUpBtnRef}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  </>
  );
}

export default SigninSignup;
