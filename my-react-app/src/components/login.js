import React, { useState } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';

const Login = () => {
    const [activeTab, setActiveTab] = useState('signin');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Header />
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Login</li>
                        </ol>
                    </div>
                </nav>

                <section className="login_pages">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="login_image">
                                    <img src={require("../assets/images/loginpage.jpg")} alt="" />
                                </div>
                            </div>
                            <div className="login-page col-md-6">
                                <div className="form-box">
                                    <div className="form-tab">
                                        <ul className="nav nav-pills nav-fill" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === 'signin' ? 'active' : ''}`}
                                                    onClick={() => handleTabChange('signin')}
                                                >
                                                    Sign In
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                                                    onClick={() => handleTabChange('register')}
                                                >
                                                    Register
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className={`tab-pane fade ${activeTab === 'signin' ? 'show active' : ''}`} id="signin-2" role="tabpanel">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <label htmlFor="singin-email-2">Username or email address *</label>
                                                        <input type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="singin-password-2">Password *</label>
                                                        <input type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                                    </div>
                                                    <div className="form-footer">
                                                        <button type="submit" className="btn btn-outline-primary-2">
                                                            <span>LOG IN</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                            <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                                                        </div>
                                                        <a href="#" className="forgot-link">Forgot Your Password?</a>
                                                    </div>
                                                </form>
                                                <div className="form-choice">
                                                    <p className="text-center">or sign in with</p>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <a href="#" className="btn btn-login btn-g">
                                                                <i className="icon-google"></i>
                                                                Login With Google
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <a href="#" className="btn btn-login btn-f">
                                                                <i className="icon-facebook-f"></i>
                                                                Login With Facebook
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`} id="register-2" role="tabpanel">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <label htmlFor="register-email-2">Your email address *</label>
                                                        <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="register-password-2">Password *</label>
                                                        <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                                                    </div>
                                                    <div className="form-footer">
                                                        <button type="submit" className="btn btn-outline-primary-2">
                                                            <span>SIGN UP</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                            <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="form-choice">
                                                    <p className="text-center">or sign in with</p>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <a href="#" className="btn btn-login btn-g">
                                                                <i className="icon-google"></i>
                                                                Login With Google
                                                            </a>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <a href="#" className="btn btn-login  btn-f">
                                                                <i className="icon-facebook-f"></i>
                                                                Login With Facebook
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Login;
