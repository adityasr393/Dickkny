import React from 'react';
import Header from './header';
import Footer from './footer';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
const bulkinquery = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Bulk Inquiry</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row bulk_inquiry">
                        <div className="col-md-6">
                            <div className="bulk_images">
                                <img src={require("../assets/images/bulk_inq.jpg")} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bulk_form">
                                <form action="#">
                                    <h2 className="title">Bulk Inquiry</h2>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phonenumber">Phone Number</label>
                                        <input type="number" className="form-control" id="phonenumber" name="phonenumber" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your email address *</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="order">Quantity</label>
                                        <input type="text" className="form-control" id="order" name="order" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product">Products</label>
                                        <input type="text" className="form-control" id="product" name="product" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" name="message" id="message"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                            <span>SUBMIT</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/></>
    );
};

export default bulkinquery;
