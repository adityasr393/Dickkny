import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const MyAddress = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="dashboard">My Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="addressdata">
                                    <h4>Mahesh Choudhary</h4>
                                    <p>72 kisan market , diggi malpura road Sanganer sanganer India</p>
                                    <p>Jaipur, 302029 </p>
                                    <p>Contact Number: 1234567890 </p>
                                    <div className="adress_edit">
                                        <a href="#">Edit</a>
                                        <a href="#">Remove</a>
                                    </div>
                                </div>
                                <div className="add_address">
                                    <a href="#"> Add Address</a>
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

export default MyAddress;
