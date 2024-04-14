import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const MyProfile = () => {
    return (
        <><Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="/dashboard">My Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="profile">
                                    <form action="#">
                                        <h2 className="title">Profile Details</h2>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>First Name *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Last Name *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>

                                        <label>Display Name *</label>
                                        <input type="text" className="form-control" required />

                                        <label>Email address *</label>
                                        <input type="email" className="form-control" required />

                                        <label>Current password </label>
                                        <input type="password" className="form-control" />

                                        <label>New password </label>
                                        <input type="password" className="form-control" />

                                        <label>Confirm new password</label>
                                        <input type="password" className="form-control mb-2" />

                                        <button type="submit" className="btn btn-outline-primary-2">
                                            <span>SAVE CHANGES</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default MyProfile;
