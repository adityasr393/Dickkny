import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const Dashboard = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="myaccounts">
                                    <a href="myprofile.html">
                                        <h4>My Profile</h4>
                                        <p>Edit personal info, change password</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="myaccounts">
                                    <a href="myorder.html">
                                        <h4>My Order</h4>
                                        <p>View, modify and track orders</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="myaccounts">
                                    <a href="mypayments.html">
                                        <h4>My Payment</h4>
                                        <p>View and modify payment methods</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="myaccounts">
                                    <a href="myaddress.html">
                                        <h4>My Address </h4>
                                        <p>Edit, add or remove addresses</p>
                                    </a>
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

export default Dashboard;
