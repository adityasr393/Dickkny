import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const MyPayment = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="/dashboard">My Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Payments</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <h2 className="title">All Payment</h2>

                                <div className="payments">
                                    <div className="payments_box">
                                        <h5>DEBIT & CREDIT CARD </h5>
                                        <a href="#" className="paymentssec">
                                            <span><img src={require("../assets/images/debit-card-credit-card.svg")}alt="Debit/Credit Card Icon" /></span>
                                            No Debit/Credit Card saved
                                        </a>
                                    </div>
                                    <div className="payments_box">
                                        <h5>UPI </h5>
                                        <a href="#" className="paymentssec">
                                            <span><img src={require("../assets/images/upi-logo.png")} alt="UPI Logo" /></span>
                                            Add UPI ID
                                        </a>
                                    </div>
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

export default MyPayment;
